app1.service("db_services", function($rootScope, $http){
    this.sync_data = function(){
        $http.post('/get_userData', {userName:$rootScope.userName, userId:$rootScope.userId})
        .then(function (response) {
            return response.data;
        });
    }
});