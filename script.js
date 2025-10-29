const messages = ['Work in progress', 'Lavori in corso'];
const TRANSITION_DURATION = 500;
const MESSAGE_INTERVAL = 3000;
let currentIndex = 0;
const messageElement = document.getElementById('message');

function changeMessage() {
    messageElement.classList.add('fade-out');
    
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % messages.length;
        messageElement.textContent = messages[currentIndex];
        messageElement.classList.remove('fade-out');
    }, TRANSITION_DURATION);
}

setInterval(changeMessage, MESSAGE_INTERVAL);
