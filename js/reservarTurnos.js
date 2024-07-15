document.getElementById('tipoClase').addEventListener('change', actualizarHorarios);
document.getElementById('fecha').addEventListener('change', actualizarHorarios);

function enviarFormularioReserva() {
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('emailReserva').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const fecha = document.getElementById('fecha').value.trim();
    const hora = document.getElementById('hora').value.trim();
    const tipoClase = document.getElementById('tipoClase').value;
    const err = [];

    // Validación de día de la semana (lunes a viernes)
    const fechaHoraSeleccionada = new Date(fecha);
    const diaSemana = fechaHoraSeleccionada.getDay(); // 0 (domingo) a 6 (sábado)
    if (diaSemana === 0 || diaSemana === 6) {
        err.push('* Las clases solo pueden reservarse de lunes a viernes. \n');
    }

    // Validación de rango de horas (10:00 a 19:00)
    const horaSeleccionada = parseInt(hora.split(':')[0]);
    if (horaSeleccionada < 10 || horaSeleccionada >= 19) {
        err.push('* Las clases solo pueden reservarse entre las 10:00 y las 19:00. \n');
    }

    // Validación de cupos disponibles (asumiendo que tienes una función obtenerCuposDisponibles)
    const cuposDisponibles = obtenerCuposDisponibles(tipoClase, fecha, hora);
    if (cuposDisponibles === 0) {
        err.push('* Lo sentimos, no hay cupos disponibles para esta clase. \n');
    }

    // Validación de fecha y hora posterior a la actual
    const fechaHoraActual = new Date();
    if (fechaHoraSeleccionada <= fechaHoraActual) {
        err.push('* La fecha y hora de la clase deben ser posteriores a la fecha y hora actuales. \n');
    }

    if (err.length > 0) {
        alert(err.join('')); // Une los mensajes de error en una sola cadena
    } else {
        alert('Turno reservado con éxito!');
        // Lógica para registrar la reserva y actualizar cupos
        registrarTurno({ nombre, email, telefono, tipoClase, fecha, hora });
        document.getElementById('formularioReserva').reset();
    }
    return false;
}

// Función para obtener cupos disponibles (debes implementarla según tu lógica)
function obtenerCuposDisponibles(tipoClase, fecha, hora) {
    // Ejemplo: (aquí deberías consultar una base de datos o un objeto con los cupos)
    const cuposPorClase = {
        "Yoga Man": 1,
        "Yoga Kids": 0,
        "Yoga funcional": 10
    };
    // Lógica para verificar si hay cupos disponibles para la clase, fecha y hora dadas
    const cuposDisponibles = cuposPorClase[tipoClase] || 0;
    return cuposDisponibles; // Retorna el número de cupos disponibles (0 si no hay)
}

function actualizarHorarios() {
    const fechaInput = document.getElementById("fecha").value;
    const horaSelect = document.getElementById("hora");
    horaSelect.innerHTML = '<option value="">Seleccione una hora</option>';

    if (fechaInput) {
        const fechaSeleccionada = new Date(fechaInput);
        const diaSemana = fechaSeleccionada.getDay();

        // Verificar si es de lunes a viernes (1 a 5)
        if (diaSemana >= 1 && diaSemana <= 5) {
            for (let hora = 10; hora < 19; hora++) {
                const horaFormateada = hora.toString().padStart(2, '0') + ":00"; // Formato HH:MM
                horaSelect.innerHTML += `<option value="${horaFormateada}">${horaFormateada}</option>`;
            }
        } else {
            alert("Por favor, seleccione una fecha de lunes a viernes.");
            document.getElementById("fecha").value = ""; // Limpia el campo de fecha si no es válido
        }
    }
}

const turnosAgendados = [];

function registrarTurno(turno) {
    turnosAgendados.push(turno);
    mostrarTurnos();
}

function mostrarTurnos() {
    const listaTurnos = document.getElementById('listaTurnos');
    listaTurnos.innerHTML = '';

    turnosAgendados.forEach(turno => {
        const li = document.createElement('li');
        li.textContent = `${turno.nombre} - ${turno.tipoClase} - ${turno.fecha} - ${turno.hora}`;
        listaTurnos.appendChild(li);
    });
}
