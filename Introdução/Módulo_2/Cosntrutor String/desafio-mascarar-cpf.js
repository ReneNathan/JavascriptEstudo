function MascaraCPF(cpf) {


  let _cpfInit = cpf.slice(0, 2)
  let _cpfHide = _cpfInit.padEnd(9, '*')
  let _cpfEnd = cpf.slice(9, 11)



  return _cpfHide + _cpfEnd

}

console.log(MascaraCPF("47034764875"))