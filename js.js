/*if( navigator.userAgent.toLowerCase().indexOf('firefox') > -1 ){
	alert("Zmien przegladarke na:\nChrome 47-\nOpera12+\nEdge\nIE11+\nGdyz strona moze zle dzialac");
}
*/
WebFontConfig = {
    google: { families: [ 'Press+Start+2P::latin-ext', 'Play::latin-ext' ] } };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
})();

