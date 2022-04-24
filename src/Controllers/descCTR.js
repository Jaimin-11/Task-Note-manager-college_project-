app1.controller("descCTR", function($scope, $rootScope, $http){    

    $scope.editable = false;
    $scope.edit = function(type){
        $rootScope.entry_dataChange = true;
        $scope.editable = true;
        $scope.newData = $rootScope.currentSelected;
        $scope.editType = type;
        console.log($scope.editType);
    }
    $scope.markDone = function(){
        $scope.currentSelected.isDone = true;
        if(confirm("Do you want to mark this task as completed?")){       
            $http.post('/mark_done', {userId: $rootScope.userId, userName: $rootScope.userName, title:$rootScope.currentSelected.title})
            .then(function (response) {
                console.log(response);
            },function(err){
                if (err) throw err;
            });
            $rootScope.currentSelected = null;
            $scope.$emit("sync data now");
        }
    }
    $scope.delete = function(type, title){
        if(confirm("Do you want to delete this data?")){       
            $http.post('/delete_data', {userId: $rootScope.userId, userName: $rootScope.userName, type: type, title: title})
            .then(function (response) {
                console.log(response);
            },function(err){
                if (err) throw err;
            });
            $rootScope.currentSelected = null;
            $scope.$emit("sync data now");
        }
    };
        
});