(function () {
  'use strict';

  angular
    .module('festApp')
    .filter('days', [days]);

  function days () {
    return function (items, days) {
      if (!days) return items;

      var results = _.filter(items, function (item) {
        return item.days <= days ? item : null;
      });

      return results;
    }
  }
})();
