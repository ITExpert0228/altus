app.service('categoryService', ['$http','$timeout', function ($http) {
    const Tag_URL   = '/api/tag/getAll' ;
    var category = {};

    category.getcategoryList = function() {
        return $http.get(Tag_URL).then(function(response, status) {
            if (response.data == null) return null;
            return response.data;
        });
    }

    return category;
}]);