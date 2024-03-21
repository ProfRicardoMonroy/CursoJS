// Inicializa un array para mantener las referencias a las celdas del tablero
const celdas = [];
// Define los jugadores
const jugadorX = 'X';
const jugadorO = 'O';
// Establece el turno inicial
let turnoActual = jugadorX;

// Función para inicializar el juego
function inicializarJuego() {
    // Obtiene el contenedor del tablero del DOM
    const contenedor = document.getElementById('juegoGato');
    // Crea 9 celdas para el tablero de 3x3
    for (let i = 0; i < 9; i++) {
        const celda = document.createElement('div');
        celda.classList.add('juego-celda');
        // Añade un evento click a cada celda
        celda.addEventListener('click', () => hacerMovimiento(celda, i));
        // Añade la celda al contenedor del tablero
        contenedor.appendChild(celda);
        // Guarda la referencia de la celda en el array
        celdas.push(celda);
    }
}

// Función para manejar los movimientos de los jugadores
function hacerMovimiento(celda, indice) {
    // Verifica si la celda está vacía antes de hacer un movimiento
    if (celda.textContent === '') {
        // Asigna el símbolo del jugador actual a la celda
        celda.textContent = turnoActual;
        // Verifica si hay un ganador después del movimiento
        if (verificarGanador()) {
            alert(`Jugador ${turnoActual} ha ganado!`);
            // Reinicia el juego si hay un ganador
            reiniciarJuego();
        } else {
            // Cambia el turno al otro jugador
            turnoActual = turnoActual === jugadorX ? jugadorO : jugadorX;
        }
    }
}

// Función para verificar si hay un ganador
function verificarGanador() {
    // Define las combinaciones ganadoras en el tablero
    const combinacionesGanadoras = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
        [0, 4, 8], [2, 4, 6] // Diagonales
    ];

    // Verifica si alguna combinación ganadora se cumple
    return combinacionesGanadoras.some(combinacion => {
        const [a, b, c] = combinacion;
        return celdas[a].textContent && celdas[a].textContent === celdas[b].textContent && celdas[a].textContent === celdas[c].textContent;
    });
}

// Función para reiniciar el juego
function reiniciarJuego() {
    // Limpia todas las celdas
    celdas.forEach(celda => celda.textContent = '');
    // Restablece el turno al jugador X
    turnoActual = jugadorX;
}

// Añade un evento click al botón de reiniciar para iniciar la función de reinicio
document.getElementById('reiniciar').addEventListener('click', reiniciarJuego);

// Inicializa el juego al cargar el script
inicializarJuego();
