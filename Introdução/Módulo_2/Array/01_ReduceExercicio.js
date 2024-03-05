/* dado o array abaixo, utilize o reduce para gerar outro array sem números repetids*/


const arr = [1, 3, 4, 1, 4, 5, 3, 5, 8, 9]

const arrUnico = arr.reduce(function (nums, numAtual) {

  if (nums.indexOf(numAtual) < 0) {
    nums.push(numAtual);
  }

  return nums
}, [])

console.log(arrUnico);
