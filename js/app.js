// app.js

let currentLanguageDataSets = [];

// Function to switch between the loaded datasets
function loadLanguage(language) {
    if (language === 'Polish') {
        currentLanguageDataSets = polish_dataSets;  // Use Polish dataset
    } else if (language === 'Bengali') {
        currentLanguageDataSets = bengali_dataSets;  // Use Bengali dataset
    }

    // Create buttons based on the selected language dataset
    createButtons(currentLanguageDataSets);
}

// Function to dynamically create buttons for each dataset in dataSets
function createButtons(dataSets) {
    const buttonContainer = document.querySelector('.button-container');
    buttonContainer.innerHTML = '';  // Clear the button container

    // Dynamically create buttons for each data set in dataSets
    dataSets.forEach((dataset, index) => {
        const button = document.createElement('button');
        button.textContent = dataset.name;  // Use the dataset name as the button label
        button.onclick = () => {
            highlightButton(button); // Highlight the clicked button using the highlightButton function
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
