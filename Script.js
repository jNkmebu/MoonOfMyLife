// Get references to the buttons and the happy message
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const happyMessage = document.getElementById('happyMessage');

// Add event listener for the "Yes!" button
yesButton.addEventListener('click', () => {
    happyMessage.classList.remove('hidden'); // Show the happy message
});

// Add event listener for the "No..." button to make it move
noButton.addEventListener('mouseover', () => {
    // Randomly move the "No" button to a new position
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});