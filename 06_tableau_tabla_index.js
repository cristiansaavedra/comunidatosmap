// Initialize the extension
tableau.extensions.initializeAsync().then(() => {
    // Get the data source from Tableau
    const dataSource = tableau.extensions.dashboardContent.dashboard.getDataSourceAsync();

    // Get all fields from the data source
    dataSource.then((ds) => {
        const fields = ds.getFields();

        // Loop through the fields and display their values in the table
        fields.forEach((field) => {
            // Get the data for the field
            const data = field.getDataAsync();

            data.then((fieldData) => {
                const table = document.getElementById('data-table').getElementsByTagName('tbody')[0];
                const row = table.insertRow();
                const cell1 = row.insertCell(0);
                const cell2 = row.insertCell(1);

                cell1.innerHTML = field.name;
                cell2.innerHTML = JSON.stringify(fieldData);
            });
        });
    });
});
