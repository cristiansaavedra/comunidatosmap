 tableau.extensions.initializeAsync().then(function() {
	  console.log('Hola Mundo')
  });
  
 function initialize() {
    tableau.extensions.initializeAsync().then(function () {
        var dashboard = tableau.extensions.dashboardContent.dashboard;
        document.getElementById("resultBox").innerHTML = "I'm running in a dashboard named <strong>" + dashboard.name + "</strong>";
     }, function (err) {
     // something went wrong in initialization
      document.getElementById("resultBox").innerHTML = "Error while Initializing: " + err.toString();
    });
}