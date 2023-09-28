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
				alert(row);

				const rowValues = row.map((value) => value.formattedValue);
				console.log("Rows Values:", rowValues);
				
				alert(rowValues);
				
				const el = document.createElement('div');
				const width = 100; //marker.properties.iconSize[0];
				const height = 100; //marker.properties.iconSize[1];
				el.className = 'marker';
				el.style.backgroundImage = url('photos/PXL_20221210_165911033.jpg'); //`url('photos/${photo_list[c]}')`;
				//el.style.width = 100px; //`${width}px`;
				//el.style.height = 100px; //`${height}px`;
				el.style.backgroundSize = '100%';

				new mapboxgl.Marker(el)
					.setLngLat([-84.3859444,33.761595])
					.addTo(map);					

			});
		});
	});
});