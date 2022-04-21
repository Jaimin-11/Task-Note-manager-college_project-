app1.controller("newTaskCTR", function($scope, $rootScope, $http){
    $scope.newNote = {
        "title": null,
        "details": null,
    };

    $scope.addNewTask = function(){
        $http.post('/add_task', {newTask:$scope.newTask})
        .then(function (response) {
            console.log(response);
        },function(err){
            if (err) throw err;
        });
        alert("Data inserted successfully!");
        $scope.closeForm();
    };

    $scope.closeForm = function(){
        $rootScope.entry_newNote = false;
    }
});