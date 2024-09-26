let currentLanguageDataSets = [];

// Function to switch between the loaded datasets and reset the app
function loadLanguage(language) {
    resetApp();

    const polishButton = document.querySelector(".large-button[onclick*='Polish']");
    const bengaliButton = document.querySelector(".large-button[onclick*='Bengali']");

    if (language === 'Polish') {
        currentLanguageDataSets = polish_dataSets;
        polishButton.disabled = true;
        bengaliButton.disabled = false;

        // Enable the Lessons button, but keep Test disabled
        document.getElementById('lessonButton').disabled = false;
        document.getElementById('testButton').disabled = true;
    } else if (language === 'Bengali') {
        currentLanguageDataSets = bengali_dataSets;
        bengaliButton.disabled = true;
        polishButton.disabled = false;

        // Enable the Test button, but keep Lessons disabled
        document.getElementById('testButton').disabled = false;
        document.getElementById('lessonButton').disabled = true;
    }
}

// Function to reset the entire app state
function resetApp() {
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
}

// Function to display lessons with multiple tables and hide test buttons
function showLessons() {
    const lessonButton = document.getElementById('lessonButton');
    const testButton = document.getElementById('testButton');
    
    lessonButton.disabled = true;
    testButton.disabled = false;

    // Hide the buttons used for tests
    const buttonContainer = document.querySelector('.button-container');
    buttonContainer.innerHTML = '';  // Clear buttons

    // Generate multiple tables for lessons, one for each dataset constant
    displayLessons();  // Assuming displayLessons() function exists
}

// Function to show test mode and hide lessons
function showTest() {
    const testButton = document.getElementById('testButton');
    const lessonButton = document.getElementById('lessonButton');

    testButton.disabled = true;
    lessonButton.disabled = false;

    // Show the test buttons (dynamically created for each dataset)
    createButtons(currentLanguageDataSets);
}

// Function to dynamically create buttons for each dataset in dataSets (Test mode)
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
