app1.controller("newTaskCTR", function($scope, $rootScope, $http){
    $scope.newTask = {
        "title": null,
        "details": null,
        "due_date": null,
        "isDone": false
    };
    
    $scope.closeForm = function(){
        $rootScope.entry_newTask = false;
    }

    $scope.addNewTask = function(){
        $http.post('/add_task', {userName: $rootScope.userName, newTask:$scope.newTask})
        .then(function (response) {
            console.log(response);
        },function(err){
            if (err) throw err;
        });
        $scope.closeForm();
        alert("Data inserted successfully!");
    };

});