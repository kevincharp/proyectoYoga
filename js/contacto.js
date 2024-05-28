export function enviarFormulario() {
  const email = document.getElementById("email");
  const asunto = document.getElementById("asunto");
  const mensaje = document.getElementById("mensaje");

  let valid = true;
  let err = [];
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email.value.trim() === "") {
    err.push("* Debe colocar un email. \n");
    valid = false;
  } else if (!emailPattern.test(email.value)) {
    err.push("* Email no valido. \n");
    valid = false;
  }

  if (asunto.value === "") {
    err.push("* Debe de seleccionar un asunto. \n");
    valid = false;
  }

  if (mensaje.value.trim() === "") {
    err.push("* Debe de colocar un mensaje. \n");
    valid = false;
  }

  if (valid) {
    alert("Tu mensaje fue enviado correctamente.");
    document.getElementById("formularioContacto").reset();
  } else if (valid && err.length > 0) {
    alert(err);
  }

  return false;
}
