var app1 = angular.module("app1", []);
var userName = 'Jaimin';
var userId = 1;

app1.run(function($rootScope) {
    $rootScope.currentSelected = null;
    $rootScope.entry_newTask = false;
    $rootScope.userName = "Jaimin";
    $rootScope.userId = 1;
    $rootScope.total_tasks = 0;
    $rootScope.total_notes = 0;
});