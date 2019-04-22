app.controller('loginCtrl',['$scope','$timeout', 'loginService', function($scope, $timeout,loginService) {
 
    $scope.$on('$viewContentLoaded', function(){
       $(document).ready(function() {

        });
    });

  $scope.loginCheck = function() {
    var logincontent={
        name:$scope.name,
        pass:$scope.pass
    }
    loginService.loginCheck(logincontent).then(function(data) {
        console.log(data);
    }, function(err) {
        console.log(err);
    }).finally(function() {
        
    });
  
  }
  
 
}]);
