app1.controller("authCTR", function($scope, $rootScope, $http){
    $scope.userName;
    $scope.password;

    $scope.login = function(){
        console.log($scope.userName);
        $http.post('/login', {userName: $scope.userName, password:$scope.password})
        .then(function (response) {
            var data = response.data;
            console.log(data.userName);
            $rootScope.userName = data.userName;
            $rootScope.userId = data.userId;
            console.log($rootScope.userId);
            console.log($rootScope.userName);
            $scope.$emit("sync data now");
        },function(err){
            if (err) throw err;
        });
    }
});