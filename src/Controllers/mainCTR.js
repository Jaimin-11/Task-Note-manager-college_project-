app1.controller("mainCTR", function($scope, $rootScope, $http){
    
    $scope.initialFun = function(){
        $http.post('/get_userData', {userName:$rootScope.userName, userId:$rootScope.userId})
            .then(function (response) {
                var data = response.data;
                $scope.taskList = data.tasks;
                $scope.noteList = data.notes;
            });
    }

    // To communicat with child controllers
    $scope.$on("sync data now", function(){
        $scope.initialFun();
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
    
    $scope.itemClicked = function(type, title, index){
        if(type=='task'){
            $rootScope.currentSelected = $scope.taskList.filter(function(el){
                if (el.title == title){
                    return el
                }
                // [0] is written because, filter function return array of elements and
            })[0];
            $rootScope.currentSelected.type = 'task';
            $rootScope.currentSelected.index = index;
        }
        else if(type=='note'){
            $rootScope.currentSelected = $scope.noteList.filter(function(el){
                if (el.title == title){
                    return el
                }
                // [0] is written because, filter function return array of elements and
            })[0];
            $rootScope.currentSelected.type = 'note';
            $rootScope.currentSelected.index = index;
        }
    }
    $scope.choiceClicked(1);
    $scope.initialFun();
});