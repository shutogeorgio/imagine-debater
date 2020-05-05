
export default function preloadGoogleFont() {
  window.WebFontConfig = {
    google: { families: ['Lora: 400, 500, 700'] },
    active: function() {
      sessionStorage.fonts = true;
    }
  }
  (function() {
    var wf = document.createElement('script');
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })(); 
}