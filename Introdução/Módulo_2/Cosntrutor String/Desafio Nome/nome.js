function normalizaNome(nome) {

  let temEspaco = nome.indexOf(" ");
  let tamanhoNome = nome.lenght

  if (temEspaco === -1) {
    return nome
  } else {
    return "else"
  }
}


console.log(normalizaNome("daniela taipas"))
