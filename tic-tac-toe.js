document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('#board div');
    let currentPlayer = 'X';
    let gameOver = false; // Flag to track if the game is over

    // Add 'square' class to each board div
    squares.forEach(square => square.classList.add('square'));

    // Add click event for each square
    squares.forEach(square => {
        square.addEventListener('click', () => {
            if (!square.textContent && !gameOver) { // Only allow move if square is empty and game isn't over
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);

                // Check if there's a winner
                if (checkWinner()) {
                    document.getElementById('status').textContent = `Congratulations! ${currentPlayer} is the Winner!`;
                    document.getElementById('status').classList.add('you-won');
                    gameOver = true; // Set game over to prevent further moves
                } else {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                }
            }
        });

        // Hover effect
        square.addEventListener('mouseover', () => {
            if (!square.textContent && !gameOver) square.classList.add('hover');
        });
        square.addEventListener('mouseleave', () => square.classList.remove('hover'));
    });

    // Check for winning combinations
    function checkWinner() {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        return winningCombinations.some(combo => {
            const [a, b, c] = combo;
            if (
                squares[a].textContent &&
                squares[a].textContent === squares[b].textContent &&
                squares[a].textContent === squares[c].textContent
            ) {
                return true;
            }
            return false;
        });
    }

    // Reset game with "New Game" button
    const button = document.querySelector('.btn'); // Corrected button selector
    button.addEventListener('click', () => {
        squares.forEach(square => {
            square.textContent = ''; // Clear square content
            square.classList.remove('X', 'O'); // Remove X and O classes
        });
        document.getElementById('status').textContent = 'Move your mouse over a square and click to play an X or an O.';
        document.getElementById('status').classList.remove('you-won'); // Reset winner style
        currentPlayer = 'X'; // Reset to initial player
        gameOver = false; // Allow new moves for a new game
    });
});
