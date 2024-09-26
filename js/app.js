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
    // Get the lesson and test buttons
    const lessonButton = document.getElementById('lessonButton');
    const testButton = document.getElementById('testButton');

    // Disable Lessons button and enable Test button
    lessonButton.disabled = true;
    testButton.disabled = false;

    // Load lessons content
    displayLessons();  // Assuming displayLessons() function exists
}

function showTest() {
    // Get the lesson and test buttons
    const lessonButton = document.getElementById('lessonButton');
    const testButton = document.getElementById('testButton');

    // Disable Test button and enable Lessons button
    testButton.disabled = true;
    lessonButton.disabled = false;

    // Create flashcards for test mode
    createButtons(currentLanguageDataSets);  // Reuse the createButtons() function
}

// Function to dynamically create buttons for each dataset in dataSets
function createButtons(dataSets) {
    const buttonContainer = document.querySelector('.button-container');
    buttonContainer.innerHTML = '';  // Clear any previous buttons

    // Create buttons for each dataset in dataSets
    dataSets.forEach((dataset, index) => {
        const button = document.createElement('button');
        button.textContent = dataset.name;  // Use the dataset name as the button label
        button.onclick = () => {
            highlightButton(button); // Highlight the clicked button
            loadFlashcards(dataset.value);  // Load the flashcards for the selected dataset
        };
        buttonContainer.appendChild(button);

        // Automatically highlight and load the first button
        if (index === 0) {
            highlightButton(button);  // Highlight the first button on initial load
            loadFlashcards(dataset.value);  // Load the first dataset by default
        }
    });
}
