let activeButton = null; // Track the currently active (highlighted) button

// Dynamically create buttons for each dataset in dataSets array
function createButtons() {
    const flashcardContainer = document.getElementById('flashcardContainer');
    flashcardContainer.innerHTML = ''; // Clear previous flashcards

    const buttonContainer = document.getElementById('buttonContainer');
    buttonContainer.innerHTML = '';  // Clear the button container

    // Dynamically create buttons for each data set in dataSets
    dataSets.forEach((dataset, index) => {
        const button = document.createElement('button');
        button.textContent = dataset.name;  // Use the dataset name as the button label
        button.onclick = () => {
            highlightButton(button); // Highlight the clicked button
            loadFlashcards(dataset.value);  // Pass the dataset value to the function
        };
        buttonContainer.appendChild(button);

        // Automatically highlight and load the first button
        if (index === 0) {
            highlightButton(button);  // Highlight the first button
            loadFlashcards(dataset.value);  // Load the first dataset by default
        }
    });
}

// Function to highlight the clicked button and remove highlight from the previous one
function highlightButton(button) {
    if (activeButton) {
        activeButton.classList.remove('active');  // Remove the highlight from the previous button
    }
    button.classList.add('active');  // Highlight the clicked button
    activeButton = button;  // Set the current button as active
}

// Function to load the flashcards based on the selected dataset
function loadFlashcards(data) {
    const flashcardContainer = document.getElementById('flashcardContainer');
    flashcardContainer.innerHTML = ''; // Clear previous flashcards

    data.forEach(item => {
        createFlashcard(item.Polish, item.Pronunciation, item.English);
    });
}

// Function to create a flashcard
function createFlashcard(polish, pronunciation, english) {
    const flashcard = document.createElement('div');
    flashcard.classList.add('flashcard');
    flashcard.onclick = () => flipCard(flashcard);

    const front = document.createElement('div');
    front.classList.add('front');
    front.innerHTML = polish;

    const back = document.createElement('div');
    back.classList.add('back');
    // Separate the meaning and pronunciation into different lines
    back.innerHTML = `<strong>${english}</strong><br><em>${pronunciation}</em>`;

    flashcard.appendChild(front);
    flashcard.appendChild(back);
    document.getElementById('flashcardContainer').appendChild(flashcard);
}

// Function to flip a flashcard and flip it back after 3 seconds
function flipCard(card) {
    card.classList.add('flipped');
    
    // Automatically flip the card back after 3 seconds (3000 ms)
    setTimeout(() => {
        card.classList.remove('flipped');
    }, 3000);
}

// Run the createButtons function when the page loads to dynamically create buttons
window.onload = createButtons;