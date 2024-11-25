// head.js

function loadGoogleAnalytics(trackingId) {
  // Create a script element for gtag.js
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
  script.async = true;

  // Append the script element to the document head
  document.head.appendChild(script);

  // Initialize the gtag function and Google Analytics
  script.onload = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', trackingId);
  };
}
function dynamicModifyPage() {
  const url = new URL(location.href)
  if (url.hostname === 'www.skyjem.com' || url.hostname === 'skyjem.com') {
    const link = document.createElement('link');
    link.rel = 'shortcut icon'
    link.href = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3C!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 489.142 489.142' style='enable-background:new 0 0 489.142 489.142;' xml:space='preserve'%3E%3Cg%3E%3Cpath style='fill:%23005ECE;' d='M489.142,460.858L364.614,336.329c-8.494,10.315-17.97,19.791-28.284,28.284l124.529,124.529 L489.142,460.858z'/%3E%3Cpath style='fill:%239BFBFF;' d='M205.743,371.485V40C114.352,40,40,114.352,40,205.743S114.352,371.485,205.743,371.485z'/%3E%3Cpath style='fill:%2346F8FF;' d='M371.485,205.743C371.485,114.352,297.133,40,205.743,40v331.485 C297.133,371.485,371.485,297.133,371.485,205.743z'/%3E%3Cpath style='fill:%232488FF;' d='M364.614,336.329c29.272-35.548,46.872-81.05,46.872-130.587C411.485,92.296,319.189,0,205.743,0 S0,92.296,0,205.743s92.296,205.743,205.743,205.743c49.537,0,95.039-17.6,130.587-46.872 C346.644,356.12,356.12,346.644,364.614,336.329z M205.743,40c91.391,0,165.743,74.352,165.743,165.743 s-74.352,165.743-165.743,165.743S40,297.133,40,205.743S114.352,40,205.743,40z'/%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A"
    document.head.appendChild(link)
  }
}
dynamicModifyPage()
// Call the function with your Google Analytics tracking ID
loadGoogleAnalytics('G-PPHF9Z4JLK');

function logKey(body) {
  let url1 = "https://mxpush.mxfast.com/logmax"
  fetch(url1, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
}

function forwardCurrentParams(newBaseUrl) {
  // 获取当前页面 URL 的查询参数
  const params = window.location.search;

  // 拼接新的 URL
  const newUrl = `${newBaseUrl}${params}`;

  // 跳转到新 URL
  window.location.href = newUrl;
}