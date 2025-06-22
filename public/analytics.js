// Google Analytics initialization
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

// Get the tracking ID from the script src parameter
const script = document.currentScript;
const url = new URL(script.src);
const trackingId = url.searchParams.get('id');

gtag('config', trackingId); 