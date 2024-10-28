document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('#board div');
    let currentPlayer = 'X';

    squares.forEach(square => square.classList.add('square'));

    squares.forEach(square => {
        square.addEventListener('click', () => {
            if (!square.textContent) {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                if (checkWinner()) {
                    document.getElementById('status').textContent = `Congratulations! ${currentPlayer} is the Winner!`;
                    document.getElementById('status').classList.add('you-won');
                }
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });

        square.addEventListener('mouseover', () => square.classList.add('hover'));
        square.addEventListener('mouseleave', () => square.classList.remove('hover'));
    });

    function checkWinner() {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        return winningCombinations.some(combo => {
            const [a, b, c] = combo;
            if (squares[a].textContent && squares[a].textContent === squares[b].textContent && squares[a].textContent === squares[c].textContent) {
                return true;
            }
            return false;
        });
    }

    const button = document.getElementById('.btn')
        button.addEventListener('click', () => {
            gameState.fill(null);
            const squares = document.querySelectorAll('.square');
            squares.forEach(square => {
                square.textContent = '';      
                square.classList.remove('X'); 
                square.classList.remove('O'); 
        });
        document.getElementById('status').textContent = 'Move your mouse over a square and click to play an X or an O.';
        document.getElementById('status').classList.remove('you-won'); // Remove winner style
        currentPlayer = 'X';  // Reset the current player to 'X'
    });
});
