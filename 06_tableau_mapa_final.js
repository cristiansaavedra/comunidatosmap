tableau.extensions.initializeAsync().then(() => {
	
	alert("entro");

	const worksheet = tableau.extensions.dashboardContent.dashboard.worksheets[0];
	console.log(worksheet.name);

	worksheet.getSummaryDataReaderAsync().then((dataTableReader) => {
		console.log("DataTableReader",dataTableReader);

		dataTableReader.getAllPagesAsync().then((dataTable) => {
			console.log("dataTable",dataTable);

			const columns = dataTable.columns;
			console.log("columns",columns);

			const columnNames = columns.map((column) => column.fieldName);
			console.log("Column Names:", columnNames);
			
			const rows =  dataTable.data;
			console.log("rows",rows);

			rows.forEach(row => {
				const rowValues = row.map((value) => value.formattedValue);
				console.log("Rows Values:", rowValues);
				
				const url_photo = rowValues[3];
				const latitude  = rowValues[4];
				const longitude = rowValues[5];
				const iconSizeh = rowValues[6];
				const iconSizew = rowValues[7];
				
				const el = document.createElement('div');
				const width  = iconSizeh;
				const height = iconSizew;
				el.className = 'marker';
				el.style.backgroundImage = url_photo;
				el.style.width = `${iconSizew}px`;
				el.style.height = `${iconSizeh}px`;
				el.style.backgroundSize = '100%';

				new mapboxgl.Marker(el)
					.setLngLat([parseFloat(longitude), parseFloat(latitude)])
					.addTo(map);					

			});
		});
	});
});