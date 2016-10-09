(function () {
'use strict';

angular.module('data')
.component('categories', {
  templateUrl: 'src/Menu/templates/category.template.html',
  bindings: {
     category: '<'
  }
});

})();