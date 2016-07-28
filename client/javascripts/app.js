(()=>{
  const angular = require('angular');
  const aewRoutes = require('./routes');
  angular.module('aew-app', [aewRoutes]);
})();