const board = Array.from({ length: 3 }, () => Array(3).fill(null));
let turn = 'X';

function drawBoard() {
    const boardDiv = document.getElementById('board');
    boardDiv.innerHTML = '';

    board.forEach((row, i) => {
        row.forEach((_, j) => {
            const box = document.createElement('div');
            box.classList.add('box');
            box.dataset.i = i;
            box.dataset.j = j;
            box.addEventListener('click', handleBoxClick);
            boardDiv.appendChild(box);
        });
    });
}

function handleBoxClick(e) {
    const box = e.target;
    if (box.textContent) return;

    box.textContent = turn;
    board[box.dataset.i][box.dataset.j] = turn;
    let winner = checkWinner(board);
        if (winner) {
            // set a timeout to allow the last X or O to be drawn
            setTimeout(() => {
                alert(`Player ${winner} is the winner!`);
            }, 100);
        }
    turn = turn === 'X' ? 'O' : 'X';
}

function checkWinner(board) {
        for (let i = 0; i < 3; i++) {
            if (
                board[i][0] &&
                board[i][0] === board[i][1] &&
                board[i][0] === board[i][2]
            ) {
                return board[i][0];
            }
        }
    
        for (let i = 0; i < 3; i++) {
            if (
                board[0][i] &&
                board[0][i] === board[1][i] &&
                board[0][i] === board[2][i]
            ) {
                return board[0][i];
            }
        }
    
        if (
            board[0][0] &&
            board[0][0] === board[1][1] &&
            board[0][0] === board[2][2]
        ) {
            return board[0][0];
        }
    
        if (
            board[0][2] &&
            board[0][2] === board[1][1] &&
            board[0][2] === board[2][0]
        ) {
            return board[0][2];
        }
    
        return null;
    
}

drawBoard();