(function () {
  'use strict';

  angular
    .module('festApp')
    .factory('Festival', ['$http', Festival]);

  function Festival ($http) {
    var methods = {
      getList: getList,
      getCountries: getCountries
    };

    function getCountries () {
      return $http.get('js/data/countries.json');
    }

    function getList () {
      return $http.get('js/data/festivals.json');
    }

    return methods;
  }
})();
