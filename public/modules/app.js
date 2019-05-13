var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    
    $locationProvider.html5Mode(true);

    $routeProvider.when('/contactus', {
        templateUrl: 'modules/contactus/contactus.html',
         controller: 'contactusController'
    })
    .when('/signup', {
        templateUrl: 'modules/signup/signup.html',
         controller: 'signupController'
    })
    .when('/entertainment/:param1', {
        templateUrl: 'modules/entertainment/entertainment.html',
         controller: 'entertainmentAllController'
    })
    .when('/partentertainment/:param1', {
        templateUrl: 'modules/partentertainment/partentertainment.html',
        controller: 'partentertainmentController'
    })
    .when('/partentertainment/:param1/:param2', {
        templateUrl: 'modules/partentertainment/partentertainment.html',
        controller: 'partentertainmentController'
    })
    .when('/category', {
        templateUrl: 'modules/category/category.html',
        controller: 'categoryController'
    })
    .when('/', {
        templateUrl: 'modules/home/home.html',
		controller: 'homeController'
    })
    .otherwise({ redirectTo: '/' });

});



app.controller('getEntertainmentCtrl', ['$scope', '$document', '$window',function ($scope, $document,$window) {
    $scope.search = function($event) {
        if ($event.keyCode == 13) {
            console.log("event.keyCode:"+$scope.searchkeyword);
            if($scope.searchkeyword.length<4){
                $scope.searchstate="You must include at least one positive keyword with 3 characters or more.";
                angular.element(document.querySelector(".myalertpopup-content1")).addClass("active");
                angular.element(document.querySelector(".myalertpopup-overlay1")).addClass("active");
            
            return;
            }else{
                var inputkeyword=$scope.searchkeyword;
                var capsInput = inputkeyword.split(' '),
                    newInput = [];
                angular.forEach(capsInput,function(val,index){
                    newInput.push(val.substr(0,1).toUpperCase()+val.substr(1));   
                });
                inputkeyword= newInput.join(' ');
                $window.location.href = '/partentertainment/'+inputkeyword;
            }
        }
    }
    $scope.searchok=function(){
        angular.element(document.querySelector(".myalertpopup-overlay1")).removeClass("active");
        angular.element(document.querySelector(" .myalertpopup-content1")).removeClass("active");
     }

  }]);

app.controller('getTagCtrl', ['$scope', '$http', function ($scope, $http,$) {
    const Tag_URL   = '/api/tag/getAll' ;
    var tag = {};
    $scope.getTagInit=function(){
        $url=Tag_URL;
        return $http.get($url).then(function(response, status) {
            if (response.data == null) return null;
            // return response.data;
            $scope.tags=[];
            $scope.tags=response.data;
        });
    }
    $scope.$on('$viewContentLoaded', function(){
        $("#Category").on("click", "ul li a", function () {
            $(this).parent().hide();
        });
        $(document).ready(function () {
            //Skyicon
            var icons = new Skycons({"color": "#fff"}),
                    list = [
                        "clear-day", "clear-night", "partly-cloudy-day",
                        "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
                        "fog"
                    ],
                    i;

            for (i = list.length; i--; )
                icons.set(list[i], list[i]);

            icons.play();
        });
            jQuery(document).on('click', '.mega-dropdown', function(e) {
          e.stopPropagation()
        });
        jQuery(document).on('click', '.search', function(e) {
          jQuery('.top-search').show();
        });

        jQuery(document).on('click', '.close-search', function(e) {
          jQuery('.top-search').hide();
        });
////
////
////
        $(document).ready(function(){
        $(".dropdown").hover(            
            function() {
                $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
                $(this).toggleClass('open');        
            },
            function() {
                $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
                $(this).toggleClass('open');       
            }
        );
    });
    });    

}]);


