const textos = [
  {
    titulo: "CLASE GRUPAL",
    descripcion:
      "Las clases grupales de yoga ofrecen una experiencia enriquecedora y transformadora para los participantes, permitiéndoles sumergirse en una práctica milenaria en compañía de otros entusiastas del yoga.",
  },
  {
    titulo: "CLASE KIDS",
    descripcion:
      "Las clases de yoga para niños están diseñadas para introducir a los más pequeños en la práctica del yoga de una manera divertida y accesible, a través de juegos, historias y actividades dinámicas los niños aprenden posturas básicas.",
  },
  {
    titulo: "VIRTUAL YOGA",
    descripcion:
      "Las clases virtuales de yoga han revolucionado la forma en que las personas pueden acceder y disfrutar de esta práctica milenaria, brindando flexibilidad y conveniencia sin precedentes, los participantes pueden unirse a sesiones de yoga.",
  },
  {
    titulo: "YOGA MUM",
    descripcion:
      "Las clases de yoga para embarazadas están especialmente diseñadas para apoyar a las mujeres durante el embarazo, brindándoles una práctica segura y beneficiosa que se adapta a las necesidades cambiantes de su cuerpo.",
  },
  {
    titulo: "YOGA WOMAN",
    descripcion:
      "Las clases de yoga exclusivas para mujeres ofrecen un espacio seguro y empoderador donde ellas pueden enfocarse en su bienestar físico y emocional. Estas diseñadas para atender las necesidades únicas de las mujeres en diferentes etapas.",
  },
  {
    titulo: "YOGA MAN",
    descripcion:
      "Las clases de yoga exclusivas para hombres ofrecen un espacio dedicado y adaptado a las necesidades y objetivos específicos del cuerpo masculino. Estas sesiones se enfocan en mejorar la fuerza, la flexibilidad y la resistencia. ",
  },
];

// Elementos HTML
const tituloElement = document.getElementById("tituloClase");
const descripcionElement = document.getElementById("descripcionClase");

let currentIndex = 0;

// Función para cambiar el texto cada cierto tiempo
function cambiarTexto() {
  tituloElement.classList.add("hide");
  descripcionElement.classList.add("hide");

  setTimeout(() => {
    tituloElement.textContent = textos[currentIndex].titulo;
    descripcionElement.textContent = textos[currentIndex].descripcion;
    tituloElement.classList.remove("hide");
    descripcionElement.classList.remove("hide");
    currentIndex = (currentIndex + 1) % textos.length; // Circula entre los textos disponibles
  }, 500); // Tiempo de espera para la transición
}

// Cambia el texto inicialmente
cambiarTexto();

// Cambia el texto cada 3 segundos (3000 milisegundos)
setInterval(cambiarTexto, 3000);
