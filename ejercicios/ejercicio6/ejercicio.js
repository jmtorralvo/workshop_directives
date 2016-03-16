(function() {
    angular
        .module('directivas')
        .directive('ejercicioHoy2', function() {
            const ddo = {
                restrict: 'E',
                template: '<h1>Hoy es {{vm.today}}</h1>',
                controller: ejercicio5Ctrl,
                controllerAs: 'vm'
            };
            return ddo;

            function ejercicio5Ctrl($filter) {
                this.today = $filter('date')(new Date(), "dd/MM/yyyy");
            }
        });
}());
