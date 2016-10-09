(function () {
'use strict';

angular.module('data')
.component('items', {
  templateUrl: 'src/Menu/templates/item-template.html',
  bindings: {
    item: '<'
  }
});

})();