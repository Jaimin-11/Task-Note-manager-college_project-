app1.run(function($rootScope) {
    $rootScope.currentSelected = null;
});

app1.controller("dataListCTR", function($scope, $rootScope, $http){
    $scope.arrowDir = "arrow_right";
    // $http.get("http://localhost:8080/get_task")
    // .then(function (response) {
    //     $scope.taskList = response.data;
    // });
    $scope.projList = projObjs;
    $scope.choiceClicked = function(v, b){
        if(v==1){
            $scope.currentList =  $scope.taskList;
            $scope.sChoice1 = true;
            $scope.sChoice2 = false;
        }
        else{
            $scope.currentList =  $scope.projectList;
            $scope.sChoice1 = false;
            $scope.sChoice2 = true;
        }
    }
    $scope.itemClicked = function(type, dataId){
        if(type=='task'){
            $rootScope.currentSelected = $scope.taskList.filter(function(el){
                if (el.dataId == dataId){
                    return el
                }
                // [0] is written because, filter function return array of elements and
            })[0];
        }
        else if(type=='proj'){
            $rootScope.currentSelected = $scope.projList.filter(function(el){
                if (el.dataId == dataId){
                    return el
                }
                // [0] is written because, filter function return array of elements and
            })[0];
        }
    }
    $scope.choiceClicked(1);
});

app1.controller("newTaskCTR", function($scope, $http){
    $scope.newTask = {}
    $scope.addNewTask;
})