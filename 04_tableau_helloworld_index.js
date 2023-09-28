function initialize() {
    tableau.extensions.initializeAsync().then(
		function () {
			var dashboard = tableau.extensions.dashboardContent.dashboard;
			document.getElementById("resultBox").innerHTML = "Nombre del Dashboard: <strong>" + dashboard.name + "</strong>";
		}, 
		function (err) {
			document.getElementById("resultBox").innerHTML = "Error while Initializing: " + err.toString();
		}
	);
}