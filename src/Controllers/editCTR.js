app1.controller("editCTR", function($scope, $rootScope, $http){

    $scope.cs = $rootScope.currentSelected;

    $scope.$watch('cs', function(val){
        if(val != null){
            if(val.type == 'task'){
                $scope.newData = {
                    "title": null,
                    "details": null,
                    "due_date": null,
                    "isDone": false
                };
            }
            if(val.type == 'note')
            {
                $scope.newData = {
                    "title": null,
                    "details": null,
                };
            }
        }
    });

    $scope.closeForm = function(){
        $rootScope.entry_dataChange = false;
    }

    $scope.updateData = function(type){
        $scope.newData.title = $rootScope.currentSelected.title;
        if(confirm("Do you want to save changes in this data?")){       
            $http.post('/update_data', {userId: $rootScope.userId, userName: $rootScope.userName, title:$rootScope.currentSelected.title ,newData:$scope.newData, type: type})
            .then(function (response) {
                console.log(response);
            },function(err){
                if (err) throw err;
            });
            $rootScope.currentSelected = null;
            $rootScope.entry_dataChange = null;
            $scope.$emit("sync data now");
        }
    };
    
});