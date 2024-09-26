// Function to handle showing lessons in table format
function showLessons() {
    const contentContainer = document.getElementById('contentContainer');
    contentContainer.innerHTML = ''; // Clear previous content

    // Disable the Lessons button and enable the Test button
    document.getElementById('lessonButton').disabled = true;
    document.getElementById('testButton').disabled = false;

    // Loop through each dataset in dataSets and create tables
    dataSets.forEach(dataset => {
        const table = document.createElement('table');
        const caption = document.createElement('caption');
        caption.innerHTML = `<h2>${dataset.name.toUpperCase()}</h2>`;  // Use <h2> in caption
        table.appendChild(caption);

        const headerRow = document.createElement('tr');
        headerRow.innerHTML = `
            <th>Polish</th>
            <th>Pronunciation</th>
            <th>English</th>
        `;
        table.appendChild(headerRow);

        dataset.value.forEach((item, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.Polish}</td>
                <td>${item.Pronunciation}</td>
                <td>${item.English}</td>
            `;

            // Apply alternating row background color
            if (index % 2 === 0) {
                row.style.backgroundColor = '#f4f4f4';  // Light gray for even rows
            } else {
                row.style.backgroundColor = '#fff';     // White for odd rows
            }

            table.appendChild(row);
        });

        contentContainer.appendChild(table);
    });
}

// Function to handle showing flashcards for the test
function showTest() {
    const contentContainer = document.getElementById('contentContainer');
    contentContainer.innerHTML = ''; // Clear previous content

    // Disable the Test button and enable the Lessons button
    document.getElementById('testButton').disabled = true;
    document.getElementById('lessonButton').disabled = false;

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');
    contentContainer.appendChild(buttonContainer);

    createButtons(); // Dynamically create buttons and load flashcards
}

// Dynamically create buttons for each dataset in dataSets array (as in previous script)
function createButtons() {
    const buttonContainer = document.querySelector('.button-container');
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
    const contentContainer = document.getElementById('contentContainer');
    const flashcardContainer = document.createElement('div');
    flashcardContainer.classList.add('flashcard-container');
    contentContainer.appendChild(flashcardContainer);

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
    back.innerHTML = `<strong>${english}</strong><br><em>${pronunciation}</em>`;

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
