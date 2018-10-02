var myApp = angular.module("RegistrationApp", []);
myApp.controller("RegistrationController" , function($scope ){
	$scope.userRegistration = {};
	function pad(s) { return (s < 10) ? '0' + s : s; }
	$scope.saveContact = function(){
		$scope.userRegistration.submitform = true;
		if(!$scope.userRegistration.username || $scope.userRegistration.username.length > 20 || !$scope.userRegistration.email || !$scope.userRegistration.password || $scope.userRegistration.password.length <6 || !$scope.userRegistration.date)
			return false
		var dob = new Date($scope.userRegistration.date)
		console.log('Name: ' + $scope.userRegistration.username + 
			'\n' + 'Email: ' + $scope.userRegistration.email + 
			'\n' + 'Date of birth: ' + [pad(dob.getDate()), pad(dob.getMonth()+1), dob.getFullYear()].join('/'));
		$scope.userRegistration.isSuccess = true
	};
	$scope.closebox = function(){
		$scope.userRegistration = {};
	}
});