(function () {
  angular
    .module('directivas')
    .directive('ejercicioHoy5', function (){
      const ddo = {
                restrict: 'E',
                template: '<h1>Hoy es {{vm.todayFormat}}</h1>',
                controller: ejercicio5Ctrl,
                controllerAs: 'vm',
                bindToController : true,
                link : link,
                scope : {
                	today : '='
                }
            };
            return ddo;

            function ejercicio5Ctrl($filter) {
            	this.todayFormat = $filter('date')(this.today, "dd/MM/yyyy");        
            }

            function link(scope, element, attrs, controllers){           	
            	//controllers.today = $filter('date')(new Date(), "dd/MM/yyyy");        
            }
    });
}());
