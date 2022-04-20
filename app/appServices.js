app1.service("db_Service", function(){
    this.insert_data = function(url, dataObj){
        $http.post(url, dataObj)
        .then(function (response) {
            return response.data;
        });
    }
})