// Function to display lessons from the current language dataset, with multiple tables
function displayLessons() {
    const contentContainer = document.getElementById('contentContainer');
    contentContainer.innerHTML = '';  // Clear previous content

    if (!currentLanguageDataSets || currentLanguageDataSets.length === 0) {
        contentContainer.innerHTML = '<p>Please select a language first.</p>';
        return;
    }

    // Create a table for each dataset
    currentLanguageDataSets.forEach(dataset => {
        const table = document.createElement('table');
        const caption = document.createElement('caption');
        caption.innerHTML = `<h2>${dataset.name}</h2>`;
        table.appendChild(caption);

        // Add table header
        const headerRow = document.createElement('tr');
        headerRow.innerHTML = '<th>Phrase</th><th>Pronunciation</th><th>English</th>';
        table.appendChild(headerRow);

        // Loop through the dataset values and add rows
        dataset.value.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${item.Phrase}</td><td>${item.Pronunciation}</td><td>${item.English}</td>`;
            table.appendChild(row);
        });

        // Append the table to the content container
        contentContainer.appendChild(table);
    });
}
