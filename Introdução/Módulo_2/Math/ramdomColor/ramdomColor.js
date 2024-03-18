function changeColor() {
  document.getElementById("red").innerHTML = "Red: ";
  document.getElementById("green").innerHTML = "green: ";
  document.getElementById("blue").innerHTML = "blue: ";

  let red = Math.random() * 255;
  let green = Math.random() * 255;
  let blue = Math.random() * 255;

  document.getElementById("body").style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";

  document.getElementById("red").innerHTML += red;
  document.getElementById("green").innerHTML += green;
  document.getElementById("blue").innerHTML += blue;
}