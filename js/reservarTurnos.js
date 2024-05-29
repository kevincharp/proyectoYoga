export function enviarFormularioReserva() {
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('emailReserva').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const fecha = document.getElementById('fecha').value.trim();
    const hora = document.getElementById('hora').value.trim();

    let valid = true;
    let err = [];
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const telefonoRegex = /^[0-9]+$/;
    const fechaHoraActual = new Date();
    const fechaHoraSeleccionada = new Date(`${fecha}T${hora}`);

    if (nombre === '' && email === '' && telefono === '' && fecha === '' && hora === '') {
        err.push('* Por favor, complete todos los campos del formulario.');
        valid = false;
    }

    if(nombre === ''){
        err.push('* Debe ingresar un nombre. \n');
        valid = false;
    }

    if(email === ''){
        err.push('* Debe ingresar un email. \n');
        valid = false;
    }
    else if (!emailRegex.test(email)) {
        err.push('* Por favor, ingrese un correo electrónico válido. \n');
        valid = false;
    }

    if(telefono === ''){
        err.push('* Debe ingresar un email. \n');
        valid = false;
    }
    else if (!telefonoRegex.test(telefono)) {
        err.push('* Por favor, ingrese un número de teléfono válido. \n');
        valid = false;
    }

    if(fecha === ''){
        err.push('* Debe ingresar un fecha. \n');
        valid = false;
    } 

    if(hora === ''){
        err.push('* Debe ingresar un hora. \n');
        valid = false;
    }

    if (fechaHoraSeleccionada <= fechaHoraActual) {
        err.push('* Por favor, seleccione una fecha y hora posteriores a la actual. \n');
        valid = false;
    }

    if(valid){        
        alert('Turno reservado con éxito!');
        document.getElementById('formularioReserva').reset(); 
    }
    else if(valid && err.length > 0){
        alert(err)
    }
    return false; 
}
