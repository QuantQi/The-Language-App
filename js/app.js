let currentLanguageDataSets = [];

// Function to load data for the selected language
function updateButtons(languageDataset,id, colours) {

    resetApp();
    currentLanguageDataSets = languageDataset;
    //disable all buttons with class large-button
    document.querySelectorAll('.large-button').forEach(button => {
        button.disabled = false;
        //button.style.backgroundColor = colours.secondary;
        languageList.forEach(language => {
            if (language.name === button.id) {
           // button.style.backgroundColor = language.colours.secondary;
            }
        });
    });
    document.getElementById(id).disabled = true;
   // document.getElementById(id).style.backgroundColor = colours.tertiary;

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

function loadAllLanguages(functionsArray) {
    functionsArray.forEach(language => {
            console.log('Loading...'+language.name)
    const languageMenuContainer = document.getElementById('languageMenuContainer');
    const button = document.createElement('button');
    button.classList.add('large-button');
    button.id = language.name;
    button.textContent = language.name;
    if (language.colours) {
       // button.style.color = language.colours.primary;
       // button.style.backgroundColor = language.colours.secondary;
    }
    button.onclick = () => updateButtons(language.dataSet,button.id,language.colours);
    const flagIcon = document.createElement('span');
    flagIcon.classList.add('material-icons');
    flagIcon.textContent = 'flag';
    button.prepend(flagIcon);

    languageMenuContainer.appendChild(button);
    });
}