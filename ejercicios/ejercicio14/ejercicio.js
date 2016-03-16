(function () {
  angular
    .module('directivas')
    .directive('ejercicioHeroes4', function (){
     const ddo = {
      	restrict : 'E',
      	link : link,
      	controller : heroes4Ctrl,
      	controllerAs: 'vm',
      	bindToController : true,
      	template : '<ul><li ng-repeat="hero in vm.equipo">{{hero.nombre}}</li></ul>'
      };
      return ddo;

      function heroes4Ctrl($scope, $rootScope){
      	 
      }

      function link(scope, element, attrs, controllers){
      		
      }
    });

}());
