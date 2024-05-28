const textos = [
  {
    titulo: "CLASE GRUPAL",
    urlImg: "https://www.freevector.com/uploads/vector/preview/29937/Small-Yoga-Class.jpg",
    descripcion:
      "Las clases grupales de yoga ofrecen una experiencia enriquecedora y transformadora para los participantes, permitiéndoles sumergirse en una práctica milenaria en compañía de otros entusiastas del yoga.",
  },
  {
    titulo: "CLASE KIDS",
    urlImg: "https://thumbs.dreamstime.com/b/happy-cute-little-kid-boy-girl-do-yoga-pose-happy-cute-little-kid-boy-girl-do-yoga-pose-188142738.jpg",
    descripcion:
      "Las clases de yoga para niños están diseñadas para introducir a los más pequeños en la práctica del yoga de una manera divertida y accesible, a través de juegos, historias y actividades dinámicas los niños aprenden posturas básicas.",
  },
  {
    titulo: "VIRTUAL YOGA",
    urlImg: "https://i.pinimg.com/736x/de/4b/87/de4b874588f1832aadb2812fe3e8fa13.jpg",
    descripcion:
      "Las clases virtuales de yoga han revolucionado la forma en que las personas pueden acceder y disfrutar de esta práctica milenaria, brindando flexibilidad y conveniencia sin precedentes, los participantes pueden unirse a sesiones de yoga.",
  },
  {
    titulo: "YOGA MUM",
    urlImg: "https://static.vecteezy.com/system/resources/previews/003/421/736/non_2x/concept-pregnancy-motherhood-vector.jpg",
    descripcion:
      "Las clases de yoga para embarazadas están especialmente diseñadas para apoyar a las mujeres durante el embarazo, brindándoles una práctica segura y beneficiosa que se adapta a las necesidades cambiantes de su cuerpo.",
  },
  {
    titulo: "YOGA WOMAN",
    urlImg: "https://static.vecteezy.com/system/resources/previews/002/788/659/original/yoga-group-position-balance-and-stretching-people-sitting-together-in-the-lotus-position-they-are-practicing-mindfulness-meditation-and-yoga-healthy-lifestyle-and-spirituality-concept-vector.jpg",
    descripcion:
      "Las clases de yoga exclusivas para mujeres ofrecen un espacio seguro y empoderador donde ellas pueden enfocarse en su bienestar físico y emocional. Estas diseñadas para atender las necesidades únicas de las mujeres en diferentes etapas.",
  },
  {
    titulo: "YOGA MAN",
    urlImg: "https://img.freepik.com/vector-premium/grupo-hombres-haciendo-yoga_24911-72271.jpg",
    descripcion:
      "Las clases de yoga exclusivas para hombres ofrecen un espacio dedicado y adaptado a las necesidades y objetivos específicos del cuerpo masculino. Estas sesiones se enfocan en mejorar la fuerza, la flexibilidad y la resistencia. ",
  },
];

const tituloElement = document.getElementById("tituloClase");
const descripcionElement = document.getElementById("descripcionClase");
const ImagenElement = document.getElementById("ClasesImgs");

let currentIndex = 0;

export function cambiarTexto() {  
  currentIndex = (currentIndex + 1) % textos.length; 
  tituloElement.style.opacity = 0;
  descripcionElement.style.opacity = 0;
  ImagenElement.style.opacity = 0;

  setTimeout(() => {
    ImagenElement.src = textos[currentIndex].urlImg;
    tituloElement.textContent = textos[currentIndex].titulo;
    descripcionElement.textContent = textos[currentIndex].descripcion;
    ImagenElement.style.opacity = 1; 
    tituloElement.style.opacity = 1; 
    descripcionElement.style.opacity = 1; 
  }, 500); 
}

setInterval(cambiarTexto, 4000);
