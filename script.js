//your JS code here. If required.
function time(){
	var now=new Date();
	var timer=document.getElementById("timer");
	timer.innerHTML=now.toLocaleString();
}
setInterval(time,1000);