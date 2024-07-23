
function onSearch() {
    const url = new URL(location.href)
    var input = document.querySelector('#search-term')
    var n = input.value.trim();
    const searchEngine = url.searchParams?.get('s')
    if (searchEngine === 'bing') {
        window.open('https://tonline-search.com/results.aspx?gd=RD1003641&searchsource=69&q='.concat(n));
        return
    }

    window.open('/s/?q='.concat(n));
}

