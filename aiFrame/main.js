const AIAPI = 'http://localhost:8080'
let buffer = ''
function processChunk({ chunk, contentDiv }) {
    buffer += chunk;

    // 尝试找到最后一个完整的标签
    const lastValidTagIndex = buffer.lastIndexOf('>');

    if (lastValidTagIndex !== -1) {
        const validPortion = buffer.substring(0, lastValidTagIndex + 1);
        buffer = buffer.substring(lastValidTagIndex + 1);

        // 处理有效部分
        const temp = document.createElement('div');
        temp.innerHTML = validPortion;

        // 将新内容附加到contentDiv
        while (temp.firstChild) {
            contentDiv.appendChild(temp.firstChild);
        }
    }

    // 如果缓冲区变得太大，可能表示有一个非常长的标签或纯文本
    if (buffer.length > 1000) {
        // 将缓冲区内容作为文本附加，并清空缓冲区
        contentDiv.appendChild(document.createTextNode(sanitizeHTML(buffer)));
        buffer = '';
    }
}

class AIMgr {
    async getResponse({ elOutput, prompt }) {
        const response = await fetch(AIAPI + '/ai/text', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt }),
        });
        const json = await response.json()
        console.log(json)
        elOutput.innerHTML = json.msg
    }
    async getStreamResponse({ elOutput, prompt }) {
        const response = await fetch(AIAPI + '/ai/stream', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt }),
        });
        const eventSource = new EventSource(response.url);
        let buffer = ''
        eventSource.onmessage = function (event) {
            const chunk = event.data;
            console.log(chunk)
            //processChunk({ chunk, contentDiv: elOutput })
            elOutput.textContent += chunk;
            buffer += chunk
        };

        eventSource.onerror = function () {
            console.log(buffer)
            const html = marked.parse(buffer)
            elOutput.innerHTML = html
            eventSource.close();
        }
    }
}
const aimgr = new AIMgr
const elOutput = document.getElementById('output')
const prompt = `
You are helpfull assistant that responds Markdown, you usually split your output into paragraphs.
** 用户的问题是:傲游浏览器是什么？**`
/*const prompt = `
我希望你提供有关[傲游浏览器]的信息，并以美观的Markdown格式输出。

**输出要求**：

1. 二级级标题为话题名称
2. 一个段落概述话题
3. 三级标题为“基本概念”
4. 一个段落解释话题的基本概念
5. 四级标题为“应用”
6. 一个段落描述话题的应用
7. 使用无序列表列出话题的三个主要优点
8. 使用有序列表列出话题的三个主要挑战
9. 添加一个链接文本为“更多信息”，URL为相关的维基百科页面或其他资源
10. 每个段落用 '\n' 结尾
`*/
aimgr.getStreamResponse({ elOutput, prompt })