'use strict';
namespace App {
  angular.module('app', ['ngRoute', 'ngResource'])
  .config(($routeProvider:ng.route.IRouteProvider, $locationProvider:ng.ILocationProvider) => {
    $routeProvider.when('/', {
      templateUrl: '/templates/Home.html',
      controller: app.Controllers.HomeController,
      controllerAs: 'vm'
    })
    .when('/book', {
      templateUrl: '/templates/Book.html',
      controller: app.Controllers.HomeController,
      controllerAs: 'vm'
    })
    .when('/about', {
      templateUrl: '/templates/About.html',
      controller: app.Controllers.HomeController,
      controllerAs: 'vm'
    })
    .otherwise('/');
    $locationProvider.html5Mode(true);
  });
}
