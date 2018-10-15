myApp.controller("DashboardController", function($scope, $http) {

	$scope.userDashData = {}
	function getDashboardData() {
		var req = httpServiceCall($http, 'GET', 'https://data.karix.co/api/message', {}, $scope, 'application/json')
        req.then(function(response) {
            if (response && response.data && response.data.Message.toLowerCase() == "success") {
               console.log(response.data)
            } 
        }, function(error) {
        	if(error.status == 401)
        		window.location = "login.html"
           // console.log('getDashboardData')
        });
       
    }
    getDashboardData()
})