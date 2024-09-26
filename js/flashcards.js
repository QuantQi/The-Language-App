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
    front.innerHTML = `<strong>${phrase}</strong>`;

    const back = document.createElement('div');
    back.classList.add('back');
    back.innerHTML = `<strong>${english}</strong><br><em>${pronunciation}</em>`;  // Meaning and pronunciation separated by a line break

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
