let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];

function makeMove(cellIndex) {
    if (!gameBoard[cellIndex]) {
        gameBoard[cellIndex] = currentPlayer;
        document.getElementById('board').children[cellIndex].innerText = currentPlayer;
        checkWin();
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

function checkWin() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let condition of winConditions) {
        const [a, b, c] = condition;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            document.getElementById('status').innerText = `${gameBoard[a]} wins!`;
            return;
        }
    }

    if (!gameBoard.includes("")) {
        document.getElementById('status').innerText = "It's a draw!";
    }
}

function reset() {
    currentPlayer = "X";
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    document.getElementById('status').innerText = "";
    const cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
        cell.innerText = "";
    }
}
