
function onSearch() {
    var input = document.querySelector('#search-term')
    var n = input.value.trim();
    window.open('/s/?q='.concat(n));
}

