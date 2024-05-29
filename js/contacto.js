function enviarFormulario() {
  const email = document.getElementById("email").value.trim();
  const asunto = document.getElementById("asunto").value;
  const mensaje = document.getElementById("mensaje").value.trim();

  let err = [];
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    err.push("* Debe colocar un email. \n");
  } else if (!emailPattern.test(email)) {
    err.push("* Email no valido. \n");
  }

  if (asunto === "") {
    err.push("* Debe de seleccionar un asunto. \n");
  }

  if (mensaje === "") {
    err.push("* Debe de colocar un mensaje. \n");
  }

  if (err.length > 0) {    
    alert(err);
  } else{    
    alert("Tu mensaje fue enviado correctamente.");
    document.getElementById("formularioContacto").reset();
  }

  return false;
}
