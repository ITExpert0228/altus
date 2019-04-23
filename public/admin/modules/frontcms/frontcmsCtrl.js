app.controller('frontcmsCtrl',['$scope', '$location','frontcmsService','$rootScope','authService', function($scope, $location, frontcmsService,$rootScope,authService) {
 
    $scope.$on('$viewContentLoaded', function(){
        $(document).ready(function() {
            $('.textarea_editor').wysihtml5();
        });
     });
    //  $scope.saveok=function(){
    //     angular.element(document.querySelector(".myalertpopup-overlay")).removeClass("active");
    //     angular.element(document.querySelector(".myalertpopup-content")).removeClass("active");
    //  }
    $scope.frontcmsinit=function(){
    
        frontcmsService.getfrontcmsList().then(function(data) {
          
          //  console.log($scope.signuparray);
          if(data!=undefined){
              $scope.id=data[0]._id;
              $scope.frontcmstitle=data[0].title;
              $scope.frontcmscontent=data[0].content;
              $scope.tmpfronttitle=data[0].title;
              $scope.tmpfrontcmscontent=data[0].content;
             // $scope.frontcmscontent = $sce.trustAsHtml($scope.frontcmscontent);
          }
        }, function(err) {
            console.log(err);
        }).finally(function() {
            
        });
    
    }

    $scope.saveok=function(){
        angular.element(document.querySelector(".myalertpopup-overlay")).removeClass("active");
        angular.element(document.querySelector(".myalertpopup-content")).removeClass("active");
     }
   $scope.saveContent=function(){
    $id=  $scope.id;
    $scope.frontcmscontent= angular.element(document.querySelector("#frontcmscontent")).val();//$("#user_input .wysihtml5-sandbox").contents().find("body").html()
    var contentObj = {
        title:$scope.frontcmstitle,
        content:$scope.frontcmscontent
    };
    console.log($scope.frontcmscontent);
    frontcmsService.saveContent($id,contentObj).then(function(data) {
    console.log("check:"+data);
    $scope.datasavestate="Your Data Has Saved Correctly in Server.";
    angular.element(document.querySelector(".myalertpopup-content")).addClass("active");
    angular.element(document.querySelector(".myalertpopup-overlay")).addClass("active");

    //$location.path("/admin/signup");
        
    }, function(err) {
        $scope.datasavestate="Your Data Can not Save Correctly in Server.";
        angular.element(document.querySelector(".myalertpopup-content")).addClass("active");
        angular.element(document.querySelector(".myalertpopup-overlay")).addClass("active");
    
        console.log(err);
    }).finally(function() {
        
    });
   }
   $scope.logout = function() {
    authService.logout().then(function() {
        window.location.href = '/admin/login';
    });
}
   $scope.resetContent=function(){
    $scope.frontcmstitle= $scope.tmpfronttitle;
    $scope.frontcmscontent=$scope.tmpfrontcmscontent;
    }
 
}]);
