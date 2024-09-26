// lessons.js

// Function to display lessons in table format
function displayLessons() {
    const contentContainer = document.getElementById('contentContainer');

    // Loop through each dataset in dataSets and create tables
    dataSets.forEach(dataset => {
        const table = document.createElement('table');
        const caption = document.createElement('caption');
        caption.innerHTML = `<h2>${dataset.name.toUpperCase()}</h2>`;  // Use <h2> in caption
        table.appendChild(caption);

        const headerRow = document.createElement('tr');
        headerRow.innerHTML = `
            <th>Phrase</th>
            <th>Pronunciation</th>
            <th>English</th>
        `;
        table.appendChild(headerRow);

        dataset.value.forEach((item, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.Phrase}</td>
                <td>${item.Pronunciation}</td>
                <td>${item.English}</td>
            `;

            // Apply alternating row background color
            row.style.backgroundColor = index % 2 === 0 ? '#f4f4f4' : '#fff';

            table.appendChild(row);
        });

        contentContainer.appendChild(table);
    });
}
