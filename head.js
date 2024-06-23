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

// Call the function with your Google Analytics tracking ID
loadGoogleAnalytics('G-PPHF9Z4JLK');