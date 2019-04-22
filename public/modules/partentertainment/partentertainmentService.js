app.service('partentertainmentService', ['$http','$timeout', function ($http) {
    const partentertainment_ENDPOINT   = '/api/partentertainment/getAllbycate?showcate=' ;
    var partentertainment = {};

    partentertainment.getpartentertainmentList = function(catename) {
        var $url=partentertainment_ENDPOINT+catename;
        return $http.get($url).then(function(response, status) {
            if (response.data == null) return null;
            return response.data;
        });
    }

    return partentertainment;
}]);