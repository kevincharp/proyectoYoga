function enviarFormularioReserva() {
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('emailReserva').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const fecha = document.getElementById('fecha').value.trim();
    const hora = document.getElementById('hora').value.trim();
    const tipoClase = document.getElementById('tipoClase').value;

    let err = [];
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const telefonoRegex = /^[0-9]+$/;
    const fechaHoraActual = new Date();
    const fechaHoraSeleccionada = new Date(`${fecha}T${hora}`);

    if(nombre === ''){
        err.push('* Debe ingresar un nombre. \n');
    }

    if(email === ''){
        err.push('* Debe ingresar un email. \n');
    }
    else if (!emailRegex.test(email)) {
        err.push('* Por favor, ingrese un correo electrónico válido. \n');
    }

    if(telefono === ''){
        err.push('* Debe ingresar un email. \n');
    }
    else if (!telefonoRegex.test(telefono)) {
        err.push('* Por favor, ingrese un número de teléfono válido. \n');
    }

    if(tipoClase === ''){
        err.push('* Debe ingresar una clase. \n');
    }

    if(fecha === ''){
        err.push('* Debe ingresar un fecha. \n');
    } 

    if(hora === ''){
        err.push('* Debe ingresar un hora. \n');
    }

    if (fechaHoraSeleccionada <= fechaHoraActual) {
        err.push('* Por favor, seleccione una fecha y hora posteriores a la actual. \n');
    }

    if(err.length > 0){             
        alert(err);   
    }
    else{
        alert('Turno reservado con éxito!');
        document.getElementById('formularioReserva').reset(); 
    }
    return false; 
}
