var app1 = angular.module("app1", []);
var userName = 'Jaimin';
var userId = 1;

app1.run(function($rootScope) {
    $rootScope.aboutUs = false;
    $rootScope.currentSelected = null;
    $rootScope.entry_dataChange = false;
    $rootScope.entry_newData = null;
    $rootScope.entry_newTask = false;
    $rootScope.entry_newNote = false;
    $rootScope.userName = null;
    $rootScope.userId = null;

});