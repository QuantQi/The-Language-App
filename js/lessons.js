
// Function to dynamically generate buttons for table navigation and display multiple tables for lessons
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


        //if dataset.Mnemonic is not empty, add a div to display the mnemonic story
        if (dataset.Mnemonic) {
            const mnemonic_story = document.createElement('div');
            mnemonic_story.classList.add('mnemonic_story');
            mnemonic_story.innerHTML = `${dataset.Mnemonic}`;
            contentContainer.appendChild(mnemonic_story);
        }
    });

    // Prepend the navigation buttons container to the content container
    contentContainer.prepend(navButtonsContainer);

    // Add the "Go to top" link at the bottom-right corner
    const goToTopLink = document.createElement('a');
    goToTopLink.textContent = 'Go to top';
    goToTopLink.href = '#';
    goToTopLink.classList.add('go-to-top');
    goToTopLink.onclick = (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    contentContainer.appendChild(goToTopLink);
}