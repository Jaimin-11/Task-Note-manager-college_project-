app1.controller("dataListCTR", function($scope, $rootScope, $http){
    
  
    $scope.noteList;
    $scope.taskList;
    $http.post('/get_userData', {userName:$rootScope.userName, userId:$rootScope.userId})
        .then(function (response) {
            var data = JSON.parse(JSON.stringify(response.data));
            $scope.taskList = data.tasks;
            $scope.noteList = data.notes;

        });
        
    $scope.choiceClicked = function(v, b){
        if(v==1){
            $scope.currentList =  $scope.taskList;
            $scope.sChoice1 = true;
            $scope.sChoice2 = false;
        }
        else{
            $scope.currentList =  $scope.noteList;
            $scope.sChoice1 = false;
            $scope.sChoice2 = true;
        }
    }
    $scope.markDone = function(){
        $scope.currentSelected.isDone = true;
    }
    $scope.itemClicked = function(type, title){
        if(type=='task'){
            $rootScope.currentSelected = $scope.taskList.filter(function(el){
                if (el.title == title){
                    return el
                }
                // [0] is written because, filter function return array of elements and
            })[0];
        }
        else if(type=='note'){
            $rootScope.currentSelected = $scope.noteList.filter(function(el){
                if (el.title == title){
                    return el
                }
                // [0] is written because, filter function return array of elements and
            })[0];
        }
    }
    $scope.choiceClicked(1);
});