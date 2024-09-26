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
    } else if (language === 'Bengali') {
        currentLanguageDataSets = bengali_dataSets;
        bengaliButton.disabled = true;
        polishButton.disabled = false;
    }

    // Automatically load the lessons after a language is selected
    document.getElementById('lessonButton').disabled = false;
    document.getElementById('testButton').disabled = true;
    showLessons();
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

    // Clear the test buttons (if any)
    const buttonContainer = document.querySelector('.button-container');
    buttonContainer.innerHTML = '';  // Clear buttons

    // Generate multiple tables for lessons and add navigation buttons
    displayLessons();  // Assuming displayLessons() function exists
}

// Function to dynamically generate buttons for table navigation and display multiple tables for lessons
function displayLessons() {
    const contentContainer = document.getElementById('contentContainer');
    contentContainer.innerHTML = '';  // Clear previous content

    if (!currentLanguageDataSets || currentLanguageDataSets.length === 0) {
        contentContainer.innerHTML = '<p>Please select a language first.</p>';
        return;
    }

    // Create a container for navigation buttons
    const navButtonsContainer = document.createElement('div');
    navButtonsContainer.classList.add('nav-buttons-container');

    // Create a table for each dataset and add a navigation button for it
    currentLanguageDataSets.forEach((dataset, index) => {
        // Create the navigation button
        const navButton = document.createElement('button');
        navButton.classList.add('nav-button');
        navButton.textContent = dataset.name;
        navButton.onclick = () => {
            document.getElementById(`table-${index}`).scrollIntoView({ behavior: 'smooth' });
        };
        navButtonsContainer.appendChild(navButton);

        // Create the table for the dataset
        const table = document.createElement('table');
        table.id = `table-${index}`;  // Assign an ID to the table for scrolling

        const caption = document.createElement('caption');
        caption.innerHTML = `<h2>${dataset.name}</h2>`;
        table.appendChild(caption);

        // Add table header
        const headerRow = document.createElement('tr');
        headerRow.innerHTML = '<th>Phrase</th><th>Pronunciation</th><th>English</th>';
        table.appendChild(headerRow);

        // Add table rows
        dataset.value.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${item.Phrase}</td><td>${item.Pronunciation}</td><td>${item.English}</td>`;
            table.appendChild(row);
        });

        // Append the table to the content container
        contentContainer.appendChild(table);
    });

    // Prepend the navigation buttons container to the content container
    contentContainer.prepend(navButtonsContainer);
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
