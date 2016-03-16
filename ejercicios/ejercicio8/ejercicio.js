(function () {
  angular
    .module('directivas')
    .directive('ejercicioHoy4', function ($filter){
      const ddo = {
                restrict: 'E',
                template: '<h1>Hoy, en {{vm.pais}} es {{vm.today}}</h1>',
                controller: ejercicio5Ctrl,
                controllerAs: 'vm',
                bindToController : true,
                link : link,
                scope : {
                	pais: '@pais'
                }
            };
            return ddo;

            function ejercicio5Ctrl($scope) {

            }

            function link(scope, element, attrs, controllers){           	
            	controllers.today = $filter('date')(new Date(), "dd/MM/yyyy");        
            }
    });
}());
