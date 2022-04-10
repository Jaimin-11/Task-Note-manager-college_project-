var app1 = angular.module("app1", []);

app1.controller("dataList", function($scope){
    $scope.arrowDir = "arrow_right";
    $scope.taskList = ["task 1", "task 2", "task3"];
    $scope.projectList = ["project 1", "project 2", "project 3"];
    $scope.listChoice = 1;

    $scope.choiceClicked = function(v){
        if(v==1){
            $scope.currentList =  $scope.taskList;
        }
        else{
            $scope.currentList =  $scope.projectList;
        }
    }
});
