(function () {
  'use strict';

  angular
    .module('festApp')
    .filter('cruise', [cruise]);

  function cruise () {
    return function (items, cruise) {
      if (!cruise) return items;

      var results = _.where(items, { cruise: true });

      return results;
    }
  }
})();
