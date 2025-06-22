// Lightweight analytics loader
(function() {
  const gaId = new URLSearchParams(window.location.search).get('id') || 
               document.currentScript?.src.match(/id=([^&]+)/)?.[1];
  
  if (!gaId || gaId === 'undefined' || gaId === 'G-XXXXXXXXXX') {
    return; // Don't load if no valid ID
  }

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', gaId, {
    page_title: document.title,
    page_location: window.location.href
  });
})();
