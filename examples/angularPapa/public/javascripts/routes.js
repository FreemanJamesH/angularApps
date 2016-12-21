(function() {
  'use strict';

  angular
    .module('myApp')
    .config(function($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: './partials/main.html',
          controller: 'main',
          controllerAs: 'vm'
        })
        .when('/listings', {
          templateUrl: './partials/listings.html',
          controller: 'listings',
          controllerAs: 'vm'
        })
        .otherwise({
          redirectTo: '/'
        });

      $locationProvider.html5Mode(true);
    })

}())
