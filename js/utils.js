
// Function to load the scripts for the selected language
const scripts = [
    "Polish/phrases.js",
    "Bengali/phrases.js",
    "Tamil/phrases.js",
    "French/phrases.js"
];

scripts.forEach(src => {
    const script = document.createElement('script');
    script.src = src;
    document.head.appendChild(script);
});

// Function to highlight the active button
function highlightButton(button) {
    const allButtons = document.querySelectorAll('.button-container button');
    allButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}


