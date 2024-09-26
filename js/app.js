let currentLanguageDataSets = [];

// Function to switch between the loaded datasets and reset the app
function loadLanguage(language) {
    // Reset the content container, button states, and dataset buttons
    resetApp();

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

    // Enable the Lessons and Test buttons after a language is selected
    document.getElementById('lessonButton').disabled = false;
    document.getElementById('testButton').disabled = false;

    // Now create the buttons based on the selected language's dataset
    createButtons(currentLanguageDataSets);
}

// Function to reset the entire app state
function resetApp() {
    // Clear the content container
    const contentContainer = document.getElementById('contentContainer');
    contentContainer.innerHTML = '';

    // Disable both Lessons and Test buttons initially
    const lessonButton = document.getElementById('lessonButton');
    const testButton = document.getElementById('testButton');
    lessonButton.disabled = true;
    testButton.disabled = true;

    // Clear any dynamically created buttons in the button container
    const buttonContainer = document.querySelector('.button-container');
    buttonContainer.innerHTML = '';

    // Remove any active class from dataset buttons (if any)
    const allButtons = document.querySelectorAll('.button-container button');
    allButtons.forEach(btn => btn.classList.remove('active'));
}

// Function to switch between Lessons and Test buttons
function showLessons() {
    const lessonButton = document.getElementById('lessonButton');
    const testButton = document.getElementById('testButton');
    lessonButton.disabled = true;
    testButton.disabled = false;
    displayLessons();  // Assuming displayLessons() function exists
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
            loadFlashcards(dataset.value); 
        };
        buttonContainer.appendChild(button);

        if (index === 0) {
            highlightButton(button);  
            loadFlashcards(dataset.value);  
        }
    });
}
