// app.js

// Global variable to hold the selected language folder and dataSets
let languageFolder = '';
let dataSets = [];

// Function to load the selected language dynamically
function loadLanguage(language) {
    languageFolder = language;

    // Remove the old script if it exists
    const oldScript = document.getElementById('languageScript');
    if (oldScript) {
        oldScript.remove();
    }

    // Dynamically load the language-specific phrases.js file
    const script = document.createElement('script');
    script.src = `${languageFolder}/phrases.js`; // Load from the appropriate language folder
    script.id = 'languageScript';
    document.body.appendChild(script);

    // After loading the language data, show the lessons and test buttons
    script.onload = function() {
        document.getElementById('menuContainer').style.display = 'flex'; // Show the Lessons and Test buttons
        document.getElementById('contentContainer').innerHTML = ''; // Clear any previous content
        document.getElementById('lessonButton').disabled = false;
        document.getElementById('testButton').disabled = false;
    };
}

// Function to show lessons
function showLessons() {
    const contentContainer = document.getElementById('contentContainer');
    contentContainer.innerHTML = ''; // Clear previous content

    // Disable the Lessons button and enable the Test button
    document.getElementById('lessonButton').disabled = true;
    document.getElementById('testButton').disabled = false;

    displayLessons();  // Call displayLessons() from lessons.js
}

// Function to show test flashcards
function showTest() {
    const contentContainer = document.getElementById('contentContainer');
    contentContainer.innerHTML = ''; // Clear previous content

    // Disable the Test button and enable the Lessons button
    document.getElementById('testButton').disabled = true;
    document.getElementById('lessonButton').disabled = false;

    createButtons(); // Call createButtons() from flashcards.js
}
