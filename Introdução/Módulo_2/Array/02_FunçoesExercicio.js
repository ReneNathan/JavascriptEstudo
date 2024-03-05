/*Criar duas funções, uma que soma e outra que faz a media indepedente de quantos parâmetros forem passados */

const arr = [1, 2, 3, 4, 5]
console.log(mediaArr(arr))



function sumArr(_arr) {

  let soma = 0

  for (n of _arr) {
    soma += n
  }

  return soma;
}

function mediaArr(_arr) {

  let media = 0

  for (n of _arr) {
    media += n
  }

  media /= _arr.length

  return media
}