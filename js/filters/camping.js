(function () {
  'use strict';

  angular
    .module('festApp')
    .filter('camping', [camping]);

  function camping () {
    return function (items, camping) {
      if (!camping) return items;

      var results = _.where(items, { camping: true });

      return results;
    }
  }
})();
