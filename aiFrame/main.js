const AIAPI = 'http://localhost:8080'
class AIMgr {
    async getResponse({ elOutput, prompt }) {
        const response = await fetch(AIAPI + '/ai/stream', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt }),
        });

        const eventSource = new EventSource(response.url);

        eventSource.onmessage = function (event) {
            const data = event.data;
            elOutput.textContent += data;
        };

        eventSource.onerror = function () {
            eventSource.close();
        }
    }
}
const aimgr = new AIMgr
const elOutput = document.getElementById('output')
const prompt = "天空为什么是蓝色的？"
aimgr.getResponse({ elOutput, prompt })