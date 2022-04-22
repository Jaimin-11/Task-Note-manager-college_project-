app1.controller("newNoteCTR", function($scope, $rootScope, $http){
    $scope.newNote = {
        "title": null,
        "details": null,
    };

    $scope.addNewNote = function(){
        $http.post('/add_Note', {newTask:$scope.newNote})
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