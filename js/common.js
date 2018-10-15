var myApp = angular.module("KarixApp", []);

function httpServiceCall($http, method, url, data, $scope, contentType) {
    if (method == 'POST') {
        var req = $http({
            method: method,
            url:  url,
            data: data,
            headers: {
                'Content-Type': contentType,
           

            }
        })
    } else {
        var req = $http({
            method: method,
            url: url,
            params: data,
            headers: {
                'Content-Type': contentType,
                'id_token': getCookie('id_token')
                
            }
        })
    }
    return req
};
function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}