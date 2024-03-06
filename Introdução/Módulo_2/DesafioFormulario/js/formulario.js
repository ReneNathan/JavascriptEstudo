const chk = document.getElementById("chkAceito");
const btn = document.getElementById("btn");

chk.addEventListener("change", function () {
  if (this.checked) {
    console.log("Marcado")
    btn.disabled = false;
  } else {
    console.log("Desmarcado")
    btn.disabled = true;
  }
})

const txt = document.getElementById("txtDescricao");
const cont = document.getElementById("contador")

txt.addEventListener("input", function () {

  document.getElementById("contador").textContent = 255

  console.log(txt.value)

  let cont = parseInt(document.getElementById("contador").textContent) - txt.value.length

  document.getElementById("contador").textContent = cont


  /*
    let cont = parseInt(document.getElementById("contador").textContent)
    cont--;
    document.getElementById("contador").textContent = cont
    */
})