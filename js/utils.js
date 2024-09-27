

// Function to highlight the active button
function highlightButton(button) {
    const allButtons = document.querySelectorAll('.button-container button');
    allButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}


