myApp.controller("RegistrationController", function($scope) {
    $scope.userRegistration = {};

    function pad(s) {
        return (s < 10) ? '0' + s : s;
    }
    $scope.saveContact = function() {
        $scope.userRegistration.submitform = true;
        if (!$scope.userRegistration.username || $scope.userRegistration.username.length > 20 || !$scope.userRegistration.email || !$scope.userRegistration.password || $scope.userRegistration.password.length < 6 || !$scope.userRegistration.date)
            return false
        var dob = new Date($scope.userRegistration.date)
        console.log('Name: ' + $scope.userRegistration.username +
            '\n' + 'Email: ' + $scope.userRegistration.email +
            '\n' + 'Date of birth: ' + [pad(dob.getDate()), pad(dob.getMonth() + 1), dob.getFullYear()].join('/'));

        registerUser()

    };
    $scope.closebox = function() {
        if ($scope.userRegistration.isSuccess) {
            $scope.userRegistration = {};
            window.location = 'dashboard.html'
        } else if ($scope.userRegistration.isError) {
            $scope.userRegistration.isError = false
            $scope.userRegistration.errormsg = "";
        }
    }

    function registerUser() {
        KeratinAuthN.setHost('https://auth.karix.co')
        KeratinAuthN.setCookieStore("id_token", "/", ".karix.co");
        KeratinAuthN.signup({
                username: $scope.userRegistration.email,
                password: $scope.userRegistration.password

            }).then(function(success) {
                $scope.userRegistration.isSuccess = true
                $scope.userRegistration.errormsg = 'User Registered successfully.'
                //console.log('success')

            })
            .catch(function(errors) {
                $scope.userRegistration.isError = true
                $scope.userRegistration.errormsg = errors[0].field + ' ' + errors[0].message
                $scope.$apply()
            })
    }
});