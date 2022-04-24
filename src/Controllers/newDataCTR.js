app1.controller("newDataCTR", function($scope, $rootScope, $http){
    
    $scope.type = $rootScope.entry_newData;

    $scope.$watch('type', function(val){
        if(val!=null){
            if(val == 'task'){
                $scope.newData = {
                    "title": null,
                    "details": null,
                    "due_date": null,
                    "isDone": false
                };
            }
            if(val == 'note')
            {
                $scope.newData = {
                    "title": null,
                    "details": null,
                };
            }
        }
    });

    $scope.closeForm = function(){
        $rootScope.entry_newData = null;
    }

    $scope.addNewData = function(type){
        console.log("needed",$scope.type);
        $http.post('/add_data', {userId: $rootScope.userId, userName: $rootScope.userName, newData:$scope.newData, type:type})
        .then(function (response) {
            console.log(response);
        },function(err){
            if (err) throw err;
        });
        alert("New task inserted successfully!");
        $scope.closeForm();
        $scope.$emit("sync data now");
    };
});