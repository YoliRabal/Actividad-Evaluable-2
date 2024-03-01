document.addEventListener('DOMContentLoaded', function() {
    const agregarBtn = document.getElementById('agregar');
    const listaTrabajadores = document.getElementById('lista-trabajadores');
    const resumenTrabajadores = document.getElementById('resumen-trabajadores');
    const departamentosResumen = document.getElementById('departamentos-resumen');
    const trabajadores = {};
  
    departamentosResumen.addEventListener('change', function() {
      const selectedDepartment = departamentosResumen.value;
      actualizarResumenTrabajadores(selectedDepartment);
    });
  
    agregarBtn.addEventListener('click', function() {
      const nombre = document.getElementById('nombre').value;
      const apellido = document.getElementById('apellido').value;
      const correo = document.getElementById('correo').value;
      const departamento = document.getElementById('departamento').value;
  
      if (nombre && apellido && correo && departamento) {
        if (!trabajadores[departamento]) {
          trabajadores[departamento] = [];
        }
        trabajadores[departamento].push({ nombre, apellido, correo });
  
        actualizarListaTrabajadores();
        limpiarFormulario();
        actualizarResumenTrabajadores(departamentosResumen.value);
      } else {
        alert('Por favor, complete el nombre, el apellido, el correo y seleccione un departamento');
      }
    });
  
    function actualizarListaTrabajadores() {
      listaTrabajadores.innerHTML = '';
      for (const departamento in trabajadores) {
        trabajadores[departamento].forEach(trabajador => {
          const li = document.createElement('li');
          li.className = 'list-group-item animate__animated animate__fadeInUp';
          li.textContent = `${trabajador.nombre} ${trabajador.apellido} - ${departamento}`;
          listaTrabajadores.appendChild(li);
        });
      }
    }
  
    function actualizarResumenTrabajadores(selectedDepartment) {
      const trabajadoresDepartamento = trabajadores[selectedDepartment];
      resumenTrabajadores.innerHTML = '';
      if (trabajadoresDepartamento && trabajadoresDepartamento.length > 0) {
        trabajadoresDepartamento.forEach(trabajador => {
          const li = document.createElement('li');
          li.className = 'list-group-item animate__animated animate__fadeInUp';
          li.textContent = `${trabajador.nombre} ${trabajador.apellido} - ${trabajador.correo}`;
          resumenTrabajadores.appendChild(li);
        });
      } else {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = 'No hay trabajadores en este departamento';
        resumenTrabajadores.appendChild(li);
      }
  
      const cantidadTrabajadores = trabajadoresDepartamento ? trabajadoresDepartamento.length : 0;
      const selectedOption = departamentosResumen.querySelector(`option[value="${selectedDepartment}"]`);
      selectedOption.textContent = `${selectedDepartment} (${cantidadTrabajadores})`;
    }
  
    function limpiarFormulario() {
      document.getElementById('nombre').value = '';
      document.getElementById('apellido').value = '';
      document.getElementById('correo').value = '';
      document.getElementById('departamento').value = '';
    }
  });
