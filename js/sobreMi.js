const images = [
    './assets/extendido.png',
    './assets/asiento.png',
    './assets/guerrero.png'
];

const imgElement = document.getElementById('dynamicImage');

let currentIndex = 0;

export function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    imgElement.style.opacity = 0;
    setTimeout(() => {
        imgElement.src = images[currentIndex];
        imgElement.style.opacity = 1; 
    }, 500);
}

setInterval(changeImage, 4000);