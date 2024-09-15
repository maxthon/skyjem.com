// Install the callback.
window.__gcse || (window.__gcse = {});
window.__gcse.searchCallbacks = {
  image: {
    rendered: makenicer,
  },
  web: {
    rendered: makenicer,
  },
};
var title = "";
function makenicer() {
const elm = document.querySelector(".gsc-tabsArea");
if (elm) {
  console.log("found elm:", elm);
 var url = new URL(document.location.href);
  var q = url.hash.split("gsc.q");
  if (q[1]) {
    let c = decodeURIComponent(q[1].slice(1));
    let a = c.split('&')[0]
    if(a!=title)
      document.title = a + " - Google Result";
    title = c;
  }        
}
insertTop()
}
const adt = `<div><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4174938960125325"
crossorigin="anonymous"></script>
<ins class="adsbygoogle"
style="display:block"
data-ad-format="autorelaxed"
data-ad-client="ca-pub-4174938960125325"
data-matched-content-rows-num="1"
data-matched-content-columns-num="4"
data-matched-content-ui-type="text"
data-ad-slot="1933114952"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></div>`
function insertTop(){
const elm = document.querySelector(".gsc-above-wrapper-area")
if(elm){
  elm.insertAdjacentHTML("afterEnd",adt)
}
}