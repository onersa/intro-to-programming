document.getElementById("lefteye").style.backgroundColor = "purple";
document.getElementById("head").style.transform = "rotate(-15deg)";
document.getElementById("body").style.border = "2px solid black";
document.getElementById("mouth").style.borderRadius = "4px";
document.getElementById("righteye").style.border = "4px dotted yellow";

// Change his left arm’s color.
document.getElementById("leftarm").style.backgroundColor = "#FF00FF";
// Change the text color.
document.getElementById("body").style.color = "#FF0000";
// Give Douglas hair.
document.getElementById("head").style.borderTop = "5px black solid";

document.getElementById("rightarm").style.backgroundColor = "green";
document.getElementById("mouth").style.backgroundColor = "hotpink";

//ANIMATE THE ROBOT
var rightEye = document.getElementById("righteye");
var leftEye = document.getElementById("lefteye");
var leftarm = document.getElementById("leftarm");
rightEye.addEventListener("click", moveUpDown);
leftEye.addEventListener("click", moveUpDown);
leftarm.addEventListener("click", moveRightLeft);

function moveUpDown(evt) {
  var robotPart = evt.target;
  var top = 0;
  var id = setInterval(frame, 20); //draw every 10ms

  function frame() {
    robotPart.style.top = top + "%";
    top++;

    if (top === 20) {
      clearInterval(id);
    }
  }
}

//Eventlistener fro left arm
function moveRightLeft(evt) {
  var robotPart = evt.target;
  var left = 0;
  var id = setInterval(frame, 20); //draw every 10ms

  function frame() {
    robotPart.style.left = left + "%";
    left++;

    if (left === 70) {
      clearInterval(id);
    }
  }
}
