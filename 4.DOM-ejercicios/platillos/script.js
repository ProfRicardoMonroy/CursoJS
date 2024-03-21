const platillos = [
    "Chilaquiles",
    "Hamburguesa",
    "Enchiladas suizas",
    "Enchiladas verdes",
    "Huevos rancheros",
    "Pizza",
    "Tacos al pastor",
    "Bounless",
    "Alitas",
    "Milanesas de pollo"
];

function obtenerRecomendacion() {
    const indiceAleatorio = Math.floor(Math.random() * platillos.length);
    return platillos[indiceAleatorio];
}

const btnRecomendar = document.getElementById('btnRecomendar');
const btnLimpiar = document.getElementById('btnLimpiar');
const recomendacion = document.getElementById('recomendacion');

btnRecomendar.addEventListener('click', () => {
    recomendacion.textContent = `Te recomiendo probar: ${obtenerRecomendacion()}`;
    btnRecomendar.textContent = 'Obtener otra recomendación';
    btnLimpiar.style.display = 'inline';
})

btnLimpiar.addEventListener('click', () => {
    recomendacion.textContent = '';
    btnRecomendar.textContent = 'Obtener recomendación';
    btnLimpiar.style.display = 'none';
})