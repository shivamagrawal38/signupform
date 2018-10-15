myApp.controller("LoginController", ['$scope', '$http', function($scope, $http) {
    $scope.userLogin = {};

    function pad(s) {
        return (s < 10) ? '0' + s : s;
    }
    $scope.LoginUser = function() {
        $scope.userLogin.submitform = true;
        if (!$scope.userLogin.username || !$scope.userLogin.password || $scope.userLogin.password.length < 6)
            return false
        loginUser()
    };


    function loginUser() {
        KeratinAuthN.setHost('https://auth.karix.co')
        KeratinAuthN.setCookieStore("id_token", "/", ".karix.co");
        KeratinAuthN.login({
                username: $scope.userLogin.username,
                password: $scope.userLogin.password

            }).then(function(success) {
                /*$scope.userLogin.isSuccess = true
                $scope.userLogin.errormsg = 'User loged in successfully.'*/
                window.location = 'dashboard.html'
                    //console.log('sucess')

            })
            .catch(function(errors) {
                $scope.userLogin.isError = true
                $scope.userLogin.errormsg = errors[0].field + ' ' + errors[0].message
                $scope.$apply()
            })
    }
    $scope.closebox = function() {
        if ($scope.userLogin.isError) {
            $scope.userLogin.isError = false
            $scope.userLogin.errormsg = "";
        }
    }
}]);