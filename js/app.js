var myApp = angular.module("RegistrationApp", []);
myApp.controller("RegistrationController" , function($scope ){
	$scope.userRegistration = {};
	$scope.saveContact = function(){
		console.log('Name: ' + $scope.userRegistration.username + 
			'\n' + 'Email: ' + $scope.userRegistration.email + 
			'\n' + 'Date of birth: ' + $scope.userRegistration.date);
		$scope.userRegistration.isSuccess = true
	};
	$scope.closebox = function(){
		window.location = "signup.html";
	}
});