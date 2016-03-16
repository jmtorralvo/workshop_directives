(function () {
  angular
    .module('directivas')
    .directive('ejercicioHeroes2', function (){
      const ddo = {
      	restrict : 'E',
      	controller : heroes2Ctrl,
      	controllerAs: 'vm',
      	bindToController : true,
      	template : '<ul><li ng-repeat="hero in vm.equipo">{{hero.nombre}}</li></ul>',
      	scope: {
      		equipo : '='
      	} 
      };
      return ddo;

      function heroes2Ctrl(){
      		
      }

    });
}());
 