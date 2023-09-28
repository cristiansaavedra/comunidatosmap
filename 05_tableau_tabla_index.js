// Initialize the extension
tableau.extensions.initializeAsync(function () {
    // Get the data source from Tableau
    tableau.extensions.dashboardContent.dashboard.getDataSourceAsync().then(function (dataSource) {
        // Get all fields from the data source
        dataSource.getFields().forEach(function (field) {
            // Get the data for the field
            field.getDataAsync().then(function (fieldData) {
                var table = document.getElementById('data-table').getElementsByTagName('tbody')[0];
                var row = table.insertRow();
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);

                cell1.innerHTML = field.name;
                cell2.innerHTML = JSON.stringify(fieldData);
            });
        });
    });
});
