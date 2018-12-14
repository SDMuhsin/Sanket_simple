var ids = ['one','two'];
var current = 0;
refresh();
function refresh(){
for (var i in ids){
	var ele = document.getElementById(ids[i]);
	if (i !== String(current)){ ele.className = "hide";}
	else{ ele.className = "content";}
}
}

function next(){
	if (current < ids.length -1){
		current++;
		refresh();
	}
}
function prev(){
	if (current > 0){
		current--;
		refresh();
	}
}
function openModal(){
	document.getElementById("modal" + ids[current]).className = "modal";
}function closeModal(){
	document.getElementById("modal" + ids[current]).className = "hide";
}