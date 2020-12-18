const circle = document.getElementById("circle");
const arrowUp = document.getElementById("arrowUp");
const arrowDown = document.getElementById("arrowDown");

let rotateValue = circle.style.transform;
let rotateSum = 0;

arrowUp.onclick = function() {
  rotateSum = rotateValue + "rotate(90deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
};
arrowDown.onclick = function() {
  rotateSum = rotateValue + "rotate(-90deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
};
