let currentLanguageDataSets = [];

// Function to switch between the loaded datasets
function loadLanguage(language) {
    // Get the language buttons
    const polishButton = document.querySelector(".large-button[onclick*='Polish']");
    const bengaliButton = document.querySelector(".large-button[onclick*='Bengali']");

    // Disable the selected language button and enable the other
    if (language === 'Polish') {
        currentLanguageDataSets = polish_dataSets;
        polishButton.disabled = true;
        bengaliButton.disabled = false;
    } else if (language === 'Bengali') {
        currentLanguageDataSets = bengali_dataSets;
        bengaliButton.disabled = true;
        polishButton.disabled = false;
    }

    // Now create the buttons based on the selected language's dataset
    createButtons(currentLanguageDataSets);
}

// Function to switch between Lessons and Test buttons
function showLessons() {
    const lessonButton = document.getElementById('lessonButton');
    const testButton = document.getElementById('testButton');
    lessonButton.disabled = true;
    testButton.disabled = false;
    displayLessons();
}

function showTest() {
    const lessonButton = document.getElementById('lessonButton');
    const testButton = document.getElementById('testButton');
    testButton.disabled = true;
    lessonButton.disabled = false;
    createButtons(currentLanguageDataSets);
}

// Function to dynamically create buttons for each dataset in dataSets
function createButtons(dataSets) {
    const buttonContainer = document.querySelector('.button-container');
    buttonContainer.innerHTML = '';  // Clear any previous buttons

    // Create buttons for each dataset in dataSets
    dataSets.forEach((dataset, index) => {
        const button = document.createElement('button');
        button.textContent = dataset.name;
        button.onclick = () => {
            highlightButton(button);
            loadFlashcards
