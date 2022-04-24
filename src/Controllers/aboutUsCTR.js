app1.controller("aboutUsCTR", function($scope, $rootScope){
    $scope.close = function(){
        $rootScope.aboutUs = null;
    }
});