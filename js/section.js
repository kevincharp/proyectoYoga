export function showSection() {
    document.addEventListener('DOMContentLoaded', function () {
        const sobreMi = document.querySelectorAll('.sobreMi');
        const contacto = document.querySelectorAll('.contacto:not(#contact-section .contact-section)');
        const clases = document.querySelectorAll('.clases');
        const presentacion = document.querySelectorAll('.presentacion');
        const reservarTurno = document.querySelectorAll('.reservar-turno');

        const sections = [...sobreMi, ...contacto, ...clases, ...presentacion, ...reservarTurno];

        const observerOptions = {
            root: null, 
            rootMargin: '0px',
            threshold: 0.6 
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
        });
    });
}
