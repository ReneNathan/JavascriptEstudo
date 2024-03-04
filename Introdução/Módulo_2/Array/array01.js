const arr = [1, 3, 4, 1, 4, 5, 3, 5, 8, 9]



/*
var soma = arr.reduce(function (total, valor) {
  return total + valor
})

console.log(soma) */

let arrayUnico = [arr[0]];


var arrUnico = arr.reduce(function (acumulador, atual) {

  arrayUnico.push(atual);
  console.log("acumulador: " + acumulador)
  console.log("Atual: " + atual)



  return arrayUnico

})

console.log(arrUnico)
