document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('#board div');
    squares.forEach(square => square.classList.add('square'));
});

let currentPlayer = 'X';

document.querySelectorAll('#board .square').forEach(square => {
    square.addEventListener('click', () => {
        if (!square.textContent) { // Prevent overwriting
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    });
});
document.querySelectorAll('#board .square').forEach(square => {
    square.addEventListener('mouseover', () => square.classList.add('hover'));
    square.addEventListener('mouseleave', () => square.classList.remove('hover'));
});
