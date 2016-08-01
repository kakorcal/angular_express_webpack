import angular from 'angular';
import uiRouter from 'angular-ui-router';

const aewRoutes = angular.module('aew.routes', [uiRouter]).config(routeConfig);

routeConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function routeConfig($stateProvider, $urlRouterProvider, $locationProvider){
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/home.html',
    })
    .state('page', {
      url: '/page',
      templateUrl: 'views/page.html'
    })
    ;
}

export default aewRoutes.name;