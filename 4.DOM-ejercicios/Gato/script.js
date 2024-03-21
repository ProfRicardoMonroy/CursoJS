const tablero = document.getElementById('tablero');
const turno = document.getElementById('turno');
const mensaje = document.getElementById('mensaje');
const juego = [];
let jugador = 'X';
let movimientos = 0;
let gameOver = false;

function manejarClick(event) {
    const celda = event.target;
    const ren = parseInt(celda.dataset.ren);
    const col = parseInt(celda.dataset.col);

    if (gameOver || celda.textContent.length > 0) return;

    juego[ren * 3 + col] = jugador;
    celda.textContent = jugador;
    movimientos++;
    validaGanador();
    cambiaJugador();

    if (movimientos === 9 && !gameOver) {
        mensaje.textContent = 'empate!!';
        gameOver = true;
    }

    console.log(juego);
}

// revisamos si es ganador comparando contra las combinaciones ganadoras
function validaGanador(ren, col) {
    if (
        linea(0, 0, 0, 1, 0, 2) || // linea 0
        linea(1, 0, 1, 1, 1, 2) || // linea 1
        linea(2, 0, 2, 1, 2, 2) || // linea 2
        linea(0, 0, 1, 0, 2, 0) || // columna 0
        linea(0, 1, 1, 1, 2, 1) || // columna 1
        linea(0, 2, 1, 2, 2, 2) || // columna 2
        linea(0, 0, 1, 1, 2, 2) || // diagonal \
        linea(0, 2, 1, 1, 2, 0) // diagonal /
    ) {
        mensaje.textContent = `jugador ${jugador} gana!`;
        gameOver = true;
    }
}

// reviso si el jugador tiene una combinacion ganadora
function linea(r1, c1, r2, c2, r3, c3) {
    return juego[r1 * 3 + c1] === jugador &&
        juego[r2 * 3 + c2] === jugador &&
        juego[r3 * 3 + c3] === jugador;
}

function cambiaJugador() {
    jugador = jugador === 'X' ? 'O' : 'X';
    turno.textContent = `Turno de ${jugador}`;
}
