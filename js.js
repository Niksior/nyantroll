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

	var a=1;
	
function bgclr(bg, tb, mn){
	var bg = document.getElementById(bg);
	var tb = document.getElementById(tb);
	var mn = document.getElementById(mn);
	if(a==1){
		bg.style.background = "#FF7043"
		tb.style.background = "#BF360C"
		mn.style.background = "#FFCCBC"
		a=0;
	}
	else{
		bg.style.background = "#FBE9E7"
		tb.style.background = "#FF5722"
		mn.style.background = "#FF7043"
		a=1
	}
}