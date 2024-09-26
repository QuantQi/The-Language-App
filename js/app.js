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

    // Automatically load the test once the language is selected
    loadTest();

    // Enable the Lessons button but keep Test disabled
    document.getElementById('lessonButton').disabled = false;
    document.getElementById('testButton').disabled = true;
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

// Function to load the test directly after language selection
function loadTest() {
    createButtons(currentLanguageDataSets);  // Create the test buttons automatically
}

// Function to switch between Lessons and Test buttons
function showLessons() {
    const lessonButton = document.getElementById('lessonButton');
    const testButton = document.getElementById('testButton');
    lessonButton.disabled = true;
    testButton.disabled = false;
    displayLessons();  // Assuming displayLessons() function exists
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
