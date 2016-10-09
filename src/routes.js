(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/Menu/templates/home.template.html'
  })

  // Premade list page
  .state('mainList', {
    url: '/main-list',
    templateUrl: 'src/Menu/templates/main-categories.template.html',
    controller: 'MainMenuAppController',
    controllerAs: 'mainList',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
         }
   
  })

  .state('itemDetail', {
    url: '/main-list/{category}',
    templateUrl: 'src/Menu/templates/items-list.template.html',
    controller: 'ItemsCategoryController',
    controllerAs: 'itemList',
    resolve: {
        items: ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.category);
        }]
    }
                
                
  });
}

})();
