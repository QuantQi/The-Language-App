// app.js

// Global variable to hold the selected language's data
let languageFolder = '';

// Function to load the selected language
function loadLanguage(language) {
    languageFolder = language;

    // Remove the old script if it exists
    const oldScript = document.getElementById('languageScript');
    if (oldScript) {
        oldScript.remove();
    }

    // Dynamically load the language-specific phrases.js file
    const script = document.createElement('script');
    script.src = `${language}/phrases.js`;
    script.id = 'languageScript';
    document.body.appendChild(script);

    // After loading the language data, show the lessons and test buttons
    script.onload = function() {
        document.getElementById('menuContainer').style.display = 'flex';
        document.getElementById('contentContainer').innerHTML = ''; // Clear previous content
    };
}

// Function to show lessons
function showLessons() {
    const contentContainer = document.getElementById('contentContainer');
    contentContainer.innerHTML = ''; // Clear previous content

    // Disable the Lessons button and enable the Test button
    document.getElementById('lessonButton').disabled = true;
    document.getElementById('testButton').disabled = false;

    displayLessons();  // Function from lessons.js
}

// Function to show test flashcards
function showTest() {
    const contentContainer = document.getElementById('contentContainer');
    contentContainer.innerHTML = ''; // Clear previous content

    // Disable the Test button and enable the Lessons button
    document.getElementById('testButton').disabled = true;
    document.getElementById('lessonButton').disabled = false;

    createButtons(); // Function from flashcards.js
}
