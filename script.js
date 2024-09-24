// Fecha de inicio de la relación (aquí debes poner la fecha en que comenzaron a salir)
const fechaInicio = new Date('2024-02-24'); // Cambia esta fecha a su fecha real

// Función para calcular los días transcurridos
function calcularDias() {
    const hoy = new Date();
    const diferencia = hoy - fechaInicio; // Diferencia en milisegundos
    const diasTranscurridos = Math.floor(diferencia / (1000 * 60 * 60 * 24)); // Convertir a días
    return diasTranscurridos;
}

// Mostrar los días contados en el elemento correspondiente
document.getElementById('dias-contados').innerText = `Han pasado ${calcularDias()} días desde que estamos juntas.`;
