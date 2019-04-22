app.service('loginService', ['$http','$timeout', function ($http) {
    const Login_URL   = '/api/login/check' ;
    const Login_Save_URL   = '/api/login/save' ;
    var login = {};

    
    login.loginCheck = function(logincontent) {
        return $http.post(Login_URL,{usercontent:logincontent}).then(function(response, status) {
            if (response.data == null) return null;
            return response.data;
        });
    }
    login.saveContent = function(id,contentObj) {
        var url=Login_Save_URL+"/"+id+"/update";
        return $http.put(Login_Save_URL,{ content: contentObj }).then(function(response, status) {
            if (response.data == null) return null;
            return response.data;
        });
    }

    return login;
}]);