'use strict';
var input = document.getElementById('input'),
    btn = document.getElementById('btn');
function goBing() {
    var n = input.value.trim();
    window.open('https://www.bing.com/search?q='.concat(n));
}
input.addEventListener('keydown', function (n) {
    'Enter' === n.key && goBing();
}),
    btn.addEventListener('click', function (n) {
        goBing();
    });
