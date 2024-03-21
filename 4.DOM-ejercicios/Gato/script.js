const celdas = [];
const jugadorX = "X";
const jugadorO = "O";

let turnoActual = jugadorX;

function inicializarJuego() {
    const contenedor = document.getElementById('juegoGato');
    for (let i = 0; i < 9; i++) {
        const celda = document.createElement('div');
        celda.classList.add('juego-celda');
        celda.addEventListener('click', () => hacerMovimiento());
        contenedor.appendChild(celda);
        celda.push(celda);
    }
}

function hacerMovimiento() {

}

function verificarGanador() {
    const combinacionesGanadoras = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8], // Filas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
        [0, 4, 8], [2, 4, 6] // Diagonales
    ];

    return combinacionesGanadoras.some(combinacion => {
        const [a, b, c] = combinacion;
        return celdas[a].textContent && celdas[a].textContent === celdas[b].textContent && celdas[a].textContent === celdas[c].textContent;
    });
}