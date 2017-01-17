var app = angular.module('bookApp',['ngRoute','Controllers']);
 
app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider. 
	  when('/addbook', {
        templateUrl: 'views/addbook.html',
        controller: 'AddBookController'
    }).
      when('/booklist', {
        templateUrl: 'views/booklist.html',
        controller: 'BookListController'
      }).
     otherwise({
        templateUrl: 'views/frontpage.html',
      });
}]);
 
