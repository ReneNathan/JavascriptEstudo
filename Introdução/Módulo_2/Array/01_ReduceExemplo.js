const nomes = ["Daniel", "Maria", "Joana", "João", "Felicia"]
let nomesPorOrdem = nomes.reduce(function (nomes, nomeAtual) {
  let primeiraLetra = nomeAtual[0]
  if (nomes[primeiraLetra]) {
    nomes[primeiraLetra]++
  } else {
    nomes[primeiraLetra] = 1
  }
  return nomes
}, {})

console.log(nomesPorOrdem)
