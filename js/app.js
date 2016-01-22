(function () {
  'use strict';

  angular
    .module('festApp', [
      'ngRoute'
    ])
    .config(appRouter);

  function appRouter ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl:  'views/list.html',
        controller:   'ListCtrl',
        controllerAs: 'list',
        resolve: {
          festivals: function (Festival) {
            return Festival.getList();
          },
          countries: function (Festival) {
            return Festival.getCountries();
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  }
})();
