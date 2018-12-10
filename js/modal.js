var buttons = document.getElementsByClassName("details");

//TWO FUNCTIONS FOR EACH ELEMENT BECUASE I SUCK AT JS
function m1(){
	document.getElementById("m1").style.display = "flex";
}
function closem1(){
	document.getElementById("m1").style.display = "none";
}
function m2(){
	document.getElementById("m2").style.display = "flex";
}
function closem2(){
	document.getElementById("m2").style.display = "none";
}
function m3(){
	document.getElementById("m3").style.display = "flex";
}
function closem3(){
	document.getElementById("m3").style.display = "none";
}
function m4(){
	document.getElementById("m4").style.display = "flex";
}
function closem4(){
	document.getElementById("m4").style.display = "none";
}
function m5(){
	document.getElementById("m5").style.display = "flex";
}
function closem5(){
	document.getElementById("m5").style.display = "none";
}

//NAVBAR


function dropdown(){
	var a = document.getElementById("findme");
	if (a.className === "hidden_navbar"){a.className+=" hidden";}
	else{a.className = "hidden_navbar";}
}
window.addEventListener('resize',function(){
	var b = document.getElementById("findme");
	if (window.innerWidth > 700){
		b.className = "hidden_navbar hidden";
	}
})