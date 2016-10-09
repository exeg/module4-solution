(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http', 'ApiBasePath']
function MenuDataService( $http, ApiBasePath) {

var service = this;
this.getAllCategories = function () {
         return $http.get(ApiBasePath + '/categories.json').then(function (response) {
                      return response.data;
                    });
    };
    
    
this.getItemsForCategory = function(categoryShortName) {
                var config = {};
                if (categoryShortName) {
                  config.params = {category: categoryShortName};
                };

        return $http.get(ApiBasePath + '/menu_items.json', config).then(function (response) {
          return response.data;
        });
  };
    

}
    
  



})();