const board = document.getElementById('board');
const result = document.getElementById('result');
let currentPlayer = 'X';
let moves = 0;
let gameOver = false;

const cells = [];

// inicializa el tablero
for (let i = 0; i < 3; i++) {
    const row = document.createElement('div');
    row.classList.add('clearfix');
    for (let j = 0; j < 3; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.row = i;
        cell.dataset.col = j;
        cell.addEventListener('click', handleClick);
        row.appendChild(cell);
        cells.push(cell);
    }
    board.appendChild(row);
}

function handleClick() {
    if (gameOver) return;

    if (!this.textContent) {
        this.textContent = currentPlayer;
        moves++;
        checkWinner(parseInt(this.dataset.row), parseInt(this.dataset.col));
        togglePlayer();
    }

    if (moves === 9 && !gameOver) {
        result.textContent = "empate!";
        gameOver = true;
    }
}

// revisamos si es ganador comparando contra las combinaciones ganadoras
function checkWinner(row, col) {
    if (
        checkLine(0, 0, 0, 1, 0, 2) || // linea 0
        checkLine(1, 0, 1, 1, 1, 2) || // linea 1
        checkLine(2, 0, 2, 1, 2, 2) || // linea 2
        checkLine(0, 0, 1, 0, 2, 0) || // columna 0
        checkLine(0, 1, 1, 1, 2, 1) || // columna 1
        checkLine(0, 2, 1, 2, 2, 2) || // columna 2
        checkLine(0, 0, 1, 1, 2, 2) || // diagonal \
        checkLine(0, 2, 1, 1, 2, 0) // diagonal /
    ) {
        result.textContent = `jugador ${currentPlayer} gana!`;
        gameOver = true;
    }
}

// reviso si el jugador tiene una combinacion ganadora
function checkLine(r1, c1, r2, c2, r3, c3) {
    return cells[r1 * 3 + c1].textContent === currentPlayer &&
        cells[r2 * 3 + c2].textContent === currentPlayer &&
        cells[r3 * 3 + c3].textContent === currentPlayer;
}

function togglePlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}
