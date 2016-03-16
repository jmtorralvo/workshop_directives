(function () {
  angular
    .module('directivas')
    .directive('ejercicioHoy3', function ($filter){
       const ddo = {
                restrict: 'E',
                template: '<h1>Hoy es {{vm.today}}</h1>',
                controller: ejercicio5Ctrl,
                controllerAs: 'vm',
                link : link
            };
            return ddo;

            function ejercicio5Ctrl($filter) {
                this.today = new Date();
            }

            function link(scope, element, attrs, controllers){
            	controllers.today = $filter('date')(new Date(), "dd/MM/yyyy");        
            }
    });
}());
