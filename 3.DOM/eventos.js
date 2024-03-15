document.getElementById('botonClick').addEventListener('click', function () {
    alert('Boton clickeado!');
})

document.getElementById('selector').addEventListener('change', function () {
    alert('Opción cambiada!');
})

document.getElementById('inputTexto').addEventListener('mouseover', function () {
    // alert('Opción cambiada!');
    console.log('Pasó sobre el elemento');
})

document.getElementById('inputTexto').addEventListener('mouseout', function () {
    // alert('Opción cambiada!');
    console.log('Salió del elemento');
})