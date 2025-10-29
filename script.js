const messages = ['Lavori in corso', 'Work in progress'];
const TRANSITION_DURATION = 500; // milliseconds - matches CSS transition
const MESSAGE_INTERVAL = 3000; // milliseconds
let currentIndex = 0;
const messageElement = document.getElementById('message');

function changeMessage() {
    // Fade out
    messageElement.classList.add('fade-out');
    
    // Wait for fade out to complete, then change text and fade in
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % messages.length;
        messageElement.textContent = messages[currentIndex];
        messageElement.classList.remove('fade-out');
    }, TRANSITION_DURATION);
}

// Change message every few seconds
setInterval(changeMessage, MESSAGE_INTERVAL);
