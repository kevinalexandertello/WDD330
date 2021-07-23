document.getElementById('player').addEventListener("mouseover",addScore);

score = 0;
time = 60;
needed = 30;
function addScore(){
   score++;
   document.getElementById("score").innerHTML = "Score: <b>" + score + "/" + needed + "  </b>";
   randNum =  Math.round(Math.random()*500);
   randNum2 =  Math.round(Math.random()*500);
   document.getElementById("player").style.marginTop =randNum + "px";
   document.getElementById("player").style.marginLeft =randNum2 + "px";
   if (score == 30) {
   	alert("YOU WIN!!!");
   }
}


function restTime() {
	time--;
	document.getElementById("time").innerHTML = "&nbsp;&nbsp;&nbsp;Time: "+time; 
	if (time == 0) {
		alert("Try again..");
		time = 0;
		score = 0;
	}
}

setInterval(restTime,1000);