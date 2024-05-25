document.getElementById('turnoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('¡Tu turno ha sido guardado con éxito!');
    this.reset(); // Opcional: Para limpiar el formulario después de enviar
});