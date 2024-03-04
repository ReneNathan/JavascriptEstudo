function btnEmail() {

  let email = document.getElementById("txtEmail").value;

  if (email == "") {
    alert("email invalido")
  } else {
    const feedback = document.getElementById("newsletterFeedback")

    feedback.innerHTML = ""

    const elemento = document.createElement("p");

    elemento.innerHTML = "o Email <b>" + email + "</b> foi cadastrado com sucesso";

    feedback.insertBefore(elemento, feedback.firstElementChild);
  }
}