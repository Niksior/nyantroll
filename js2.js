var pgTop, yPos, tB;

function yScroll(){
	pgTop = document.getElementById('pgTop');
	yPos = window.pageYOffset;
	tB = document.getElementById('tooBar');
	
	if(yPos > 150){
		pgTop.style.height = "0px";
		pgTop.style.padding = "0px";
		tB.style.top = "0px";
		tB.style.padding = "5px";
		tB.style.height = "20px";
	} else {
		pgTop.style.height = "100px";
		pgTop.style.padding = "30px";
		tB.style.top = "150px";
		tB.style.padding = "15px";
		tB.style.height = "30px";
	}
}

window.addEventListener("scroll", yScroll);


function nyanRun(){
	run = document.getElementById('nyan');
	console.log("lotWlprawo");
	run.style.left = "120%";
	run.style.transition = "left 1s linear 0s";
	setTimeout (function(){
		run.style.transition = "left 0s linear 0s";
		run.style.left = "-130%";
		console.log("lewo");
		}, 1000);
} 


function nyanRun1(){
	run1 = document.getElementById('nyan1');
	console.log("lotWlprawo");
	run1.style.left = "120%";
	run1.style.transition = "left 1s linear 0s";
	setTimeout (function(){
		run1.style.transition = "left 0s linear 0s";
		run1.style.left = "-130%";
		console.log("lewo");
		}, 1000);
} 

function nyanRun2(){
	run2 = document.getElementById('nyan2');
	console.log("lotWlprawo");
	run2.style.left = "120%";
	run2.style.transition = "left 1s linear 0s";
	setTimeout (function(){
		run2.style.transition = "left 0s linear 0s";
		run2.style.left = "-130%";
		console.log("lewo");
		}, 1000);
} 

function nyanRun3(){
	run3 = document.getElementById('nyan3');
	console.log("lotWlprawo");
	run3.style.left = "120%";
	run3.style.transition = "left 1s linear 0s";
	setTimeout (function(){
		run3.style.transition = "left 0s linear 0s";
		run3.style.left = "-130%";
		console.log("lewo");
		}, 1000);
} 

function nyanRun4(){
	run4 = document.getElementById('nyan4');
	console.log("lotWlprawo");
	run4.style.left = "120%";
	run4.style.transition = "left 1s linear 0s";
	setTimeout (function(){
		run4.style.transition = "left 0s linear 0s";
		run4.style.left = "-130%";
		console.log("lewo");
		}, 1000);
} 

function nyanRun5(){
	run5 = document.getElementById('nyan5');
	console.log("lotWlprawo");
	run5.style.left = "120%";
	run5.style.transition = "left 1s linear 0s";
	setTimeout (function(){
		run5.style.transition = "left 0s linear 0s";
		run5.style.left = "-130%";
		console.log("lewo");
		}, 1000);
} 

function nyanRun6(){
	run6 = document.getElementById('nyan6');
	console.log("lotWlprawo");
	run6.style.left = "120%";
	run6.style.transition = "left 1s linear 0s";
	setTimeout (function(){
		run6.style.transition = "left 0s linear 0s";
		run6.style.left = "-130%";
		console.log("lewo");
		}, 1000);
} 

function nyanRun7(){
	run7 = document.getElementById('nyan7');
	console.log("lotWlprawo");
	run7.style.left = "120%";
	run7.style.transition = "left 1s linear 0s";
	setTimeout (function(){
		run7.style.transition = "left 0s linear 0s";
		run7.style.left = "-130%";
		console.log("lewo");
		}, 1000);
} 

function nyanRun8(){
	run8 = document.getElementById('nyan8');
	console.log("lotWlprawo");
	run8.style.left = "120%";
	run8.style.transition = "left 1s linear 0s";
	setTimeout (function(){
		run8.style.transition = "left 0s linear 0s";
		run8.style.left = "-130%";
		console.log("lewo");
		}, 1000);
}  

function nyanSound(){
	vid = document.getElementById('nyanM');
	vid.play();
	vid.loop = true;
}

function nya()
{
setTimeout(nyanSound,1000);
setInterval(nyanRun,2000);
setInterval(nyanRun1,2200);
setInterval(nyanRun2,2400);
setInterval(nyanRun3,2600);
setInterval(nyanRun4,2800);
setInterval(nyanRun5,3000);
setInterval(nyanRun6,3200);
setInterval(nyanRun7,3400);
setInterval(nyanRun8,3600);
//setInterval(function(){fun2()},3000);
//setInterval(function(){fun3()},3000);
}