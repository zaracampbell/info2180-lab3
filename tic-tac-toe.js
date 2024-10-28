document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('#board div');
    let currentPlayer = 'X';
    let gameOver = false; // Flag to prevent further moves after a win

    // Apply the 'square' class to each board div
    squares.forEach(square => square.classList.add('square'));

    // Set up the click event listener for each square
    squares.forEach(square => {
        square.addEventListener('click', () => {
            // Only allow a move if the square is empty and the game isn't over
            if (!square.textContent && !gameOver) {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                
                // Check for a winner after the move
                if (checkWinner()) {
                    document.getElementById('status').textContent = `Congratulations! ${currentPlayer} is the Winner!`;
                    document.getElementById('status').classList.add('you-won');
                    gameOver = true; // Set game over to prevent further moves
                } else {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Toggle player
                }
            }
        });

        // Hover effect for each square
        square.addEventListener('mouseover', () => {
            if (!square.textContent && !gameOver) square.classList.add('hover');
        });
        square.addEventListener('mouseleave', () => square.classList.remove('hover'));
    });

    // Function to check for winning combinations
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

    // Reset the game when the "New Game" button is clicked
    const button = document.querySelector('.btn'); // Use class selector for button
    button.addEventListener('click', () => {
        squares.forEach(square => {
            square.textContent = ''; // Clear each square's content
            square.classList.remove('X', 'O'); // Remove any player class
        });
        
        document.getElementById('status').textContent = 'Move your mouse over a square and click to play an X or an O.';
        document.getElementById('status').classList.remove('you-won'); // Remove winner style
        currentPlayer = 'X'; // Reset to starting player
        gameOver = false; // Reset game state to allow moves again

        console.log("Game has been reset"); // Debug log to confirm reset
    });
});
