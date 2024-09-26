// flashcards.js

// Function to dynamically create buttons for each dataset in dataSets
function createButtons() {
    const buttonContainer = document.querySelector('.button-container');
    
    // Check if the buttonContainer exists in the DOM
    if (!buttonContainer) {
        console.error('buttonContainer element is not found in the DOM');
        return;
    }

    buttonContainer.innerHTML = '';  // Clear the button container

    // Dynamically create buttons for each data set in dataSets
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

// Function to load flashcards for the selected dataset
function loadFlashcards(data) {
    const flashcardContainer = document.createElement('div');
    flashcardContainer.classList.add('flashcard-container');
    
    // Clear previous flashcards
    document.getElementById('contentContainer').innerHTML = ''; 
    document.getElementById('contentContainer').appendChild(flashcardContainer);

    // Loop through the data to create flashcards
    data.forEach(item => {
        createFlashcard(item.Phrase, item.Pronunciation, item.English);
    });
}

// Function to create a flashcard
function createFlashcard(phrase, pronunciation, english) {
    const flashcard = document.createElement('div');
    flashcard.classList.add('flashcard');
    flashcard.onclick = () => flipCard(flashcard);

    const front = document.createElement('div');
    front.classList.add('front');
    front.innerHTML = `<strong>${phrase}</strong><br><em>${pronunciation}</em>`;

    const back = document.createElement('div');
    back.classList.add('back');
    back.innerHTML = `<strong>${english}</strong>`;

    flashcard.appendChild(front);
    flashcard.appendChild(back);
    document.querySelector('.flashcard-container').appendChild(flashcard);
}

// Function to flip a flashcard and flip it back after 3 seconds
function flipCard(card) {
    card.classList.add('flipped');
    setTimeout(() => {
        card.classList.remove('flipped');
    }, 3000);
}
