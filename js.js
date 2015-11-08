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


function tgMenu(menu){
	var menu = document.getElementById(menu);
	if(menu.dataset.opened == "no"){
	    menu.style.transform = "perspective(0px) rotateY(0deg)";
		menu.dataset.opened = "yes";
		return false;
	} else {
		menu.style.transform = "perspective(0px) rotateY(90deg)";
		menu.dataset.opened = "no";
	}
}