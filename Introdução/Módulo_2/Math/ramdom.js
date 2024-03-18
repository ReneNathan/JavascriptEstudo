function getRandomNumber(inicio = 0, fim = 10, integer = true) {
  if (integer == true) {
    return Math.random() * (fim - inicio) + inicio;
  } else {
    return Math.round(Math.random() * (fim - inicio) + inicio);
  }
}

console.log(getRandomNumber(5, 10, false))