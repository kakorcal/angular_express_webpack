(()=>{
  angular.module('aew.routes', ['ui.router']).config(routes);

  routes.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
  function routes($stateProvider, $urlRouterProvider, $locationProvider){
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/pages/home.html',
      });
  }
})();