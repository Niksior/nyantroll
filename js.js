if( navigator.userAgent.toLowerCase().indexOf('firefox') > -1 ){
	alert("Zmien przegladarke na:\nChrome 47-\nOpera12+\nEdge\nIE11+\nGdyz strona moze zle dzialac");
}

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

var pgTop, yPos;

function yScroll(){
	pgTop = document.getElementById('pgTop');
	yPos = window.pageYOffset;
	
	if(yPos > 150){
		pgTop.style.height = "50px";
		pgTop.style.padding = "8px";
	} else {
		pgTop.style.height = "100px";
		pgTop.style.padding = "30px";
	}
}

window.addEventListener("scroll", yScroll);

var i=0;
var run;

function nyanRun(){
	run = document.getElementById('nyan');
	console.log("kupa");
	run.style.left = "80%";
	run.style.transform = "rotateY(180deg)";
} 

	