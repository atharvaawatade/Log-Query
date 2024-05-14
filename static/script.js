document.getElementById('logQueryForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch('/search', {
        method: 'POST',
        body: JSON.stringify({
            level: formData.get('level'),
            message: formData.get('message'),
            startDate: formData.get('startDate'),
            endDate: formData.get('endDate')
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        displaySearchResults(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

function displaySearchResults(data) {
    const searchResultsDiv = document.getElementById('searchResults');
    searchResultsDiv.innerHTML = '';

    if (data.logs.length === 0) {
        searchResultsDiv.innerHTML = '<p>No logs found.</p>';
    } else {
        const table = document.createElement('table');
        const headerRow = table.insertRow();
        ['Level', 'Log Message', 'Timestamp', 'Source'].forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText;
            headerRow.appendChild(th);
        });

        data.logs.forEach(log => {
            const row = table.insertRow();
            ['level', 'log_string', 'timestamp', 'metadata'].forEach(key => {
                const cell = row.insertCell();
                if (key === 'metadata') {
                    cell.textContent = log[key].source;
                } else {
                    cell.textContent = log[key];
                }
            });
        });

        searchResultsDiv.appendChild(table);
    }
}
