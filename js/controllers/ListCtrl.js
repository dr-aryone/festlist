(function () {
  'use strict';

  angular
    .module('festApp')
    .controller('ListCtrl', ['festivals', 'countries', ListCtrl]);

  function ListCtrl (festivals, countries) {
    this.bandList = bandList;

    this.countries = countries.data;
    this.festivals = festivals.data;
    this.search = {};
    this.title = 'Festivals';

    function bandList (bands) {
      return _.pluck(bands, 'name').join(', ');
    }
  }
})();
