function initialize() {
    tableau.extensions.initializeAsync().then(
		function () {
			var dashboard = tableau.extensions.dashboardContent.dashboard;
			document.getElementById("resultado").innerHTML = "El nombre del Dashboard es <strong>" + dashboard.name + "</strong>";
		}, 
		function (err) {
			document.getElementById("resultado").innerHTML = "Fallo: " + err.toString();
		}
	);
}