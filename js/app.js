// app.js

// Initialize active button
let activeButton = null;

// Show lessons when the "Lessons" button is clicked
function showLessons() {
    const contentContainer = document.getElementById('contentContainer');
    contentContainer.innerHTML = ''; // Clear previous content

    // Disable the Lessons button and enable the Test button
    document.getElementById('lessonButton').disabled = true;
    document.getElementById('testButton').disabled = false;

    displayLessons();  // Function from lessons.js
}

// Show test when the "Test" button is clicked
function showTest() {
    const contentContainer = document.getElementById('contentContainer');
    contentContainer.innerHTML = ''; // Clear previous content

    // Disable the Test button and enable the Lessons button
    document.getElementById('testButton').disabled = true;
    document.getElementById('lessonButton').disabled = false;

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');
    contentContainer.appendChild(buttonContainer);

    createButtons(); // Function from flashcards.js
}
