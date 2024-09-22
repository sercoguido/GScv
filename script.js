function mostrarMensaje() {
    // Captura el valor del input de nombre
    var nombre = document.getElementById('nombre_formulario').value;

    // Verifica si se ingresó un nombre
    if (nombre.trim() !== "") {
        alert('¡Muchas gracias ' + nombre + ' por tu mensaje!');
    } else {
        alert("Por favor, ingresa tu nombre.");
    }
}