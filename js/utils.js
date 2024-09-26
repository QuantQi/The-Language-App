// utils.js

// Global variable to track the active button
let activeButton = null; 

// Function to highlight the clicked button and remove highlight from the previous one
function highlightButton(button) {
    if (activeButton) {
        activeButton.classList.remove('active');  // Remove the highlight from the previous button
    }
    button.classList.add('active');  // Highlight the clicked button
    activeButton = button;  // Set the current button as active
}
