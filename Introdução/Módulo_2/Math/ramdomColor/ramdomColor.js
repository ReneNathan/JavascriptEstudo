function changeColor() {
  document.getElementById("red").innerHTML = "Red: ";
  document.getElementById("green").innerHTML = "green: ";
  document.getElementById("blue").innerHTML = "blue: ";

  let red = 255;
  let green = 150;
  let blue = 0;

  document.getElementById("body").style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";

  document.getElementById("red").innerHTML += red;
  document.getElementById("green").innerHTML += green;
  document.getElementById("blue").innerHTML += blue;
}