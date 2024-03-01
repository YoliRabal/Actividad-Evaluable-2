document.addEventListener('DOMContentLoaded', function() {
    const agregarBtn = document.getElementById('agregar');
    const listaTrabajadores = document.getElementById('lista-trabajadores');
    const resumenTrabajadores = document.getElementById('resumen-trabajadores');
    const trabajadores = {};

    agregarBtn.addEventListener('click', function() {
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const correo = document.getElementById('correo').value;
        const departamento = document.getElementById('departamento').value;

        if (nombre && apellido && correo && departamento) {
            // Agregar trabajador al objeto de trabajadores
            if (!trabajadores[departamento]) {
                trabajadores[departamento] = [];
            }
            trabajadores[departamento].push({ nombre, apellido });

            // Actualizar la lista de trabajadores con animación de bounceIn
            actualizarListaTrabajadores();

            // Actualizar el resumen de trabajadores con animación de bounceIn
            actualizarResumenTrabajadores();

            // Limpiar los campos del formulario
            limpiarFormulario();
        } else {
            alert('Por favor, complete todos los campos');
        }
    });

    function actualizarListaTrabajadores() {
        listaTrabajadores.innerHTML = '';
        for (const departamento in trabajadores) {
            trabajadores[departamento].forEach(trabajador => {
                const li = document.createElement('li');
                li.className = 'list-group-item animate__animated animate__bounceIn';
                li.textContent = `${trabajador.nombre} ${trabajador.apellido} - ${departamento}`;
                listaTrabajadores.appendChild(li);
            });
        }
    }

    function actualizarResumenTrabajadores() {
        resumenTrabajadores.innerHTML = '';
        for (const departamento in trabajadores) {
            const cantidad = trabajadores[departamento].length;
            const li = document.createElement('li');
            li.className = 'list-group-item animate__animated animate__bounceIn';
            li.textContent = `${departamento}: ${cantidad}`;
            resumenTrabajadores.appendChild(li);
        }
    }

    function limpiarFormulario() {
        document.getElementById('nombre').value = '';
        document.getElementById('apellido').value = '';
        document.getElementById('correo').value = '';
        document.getElementById('departamento').value = 'IT';
    }
});