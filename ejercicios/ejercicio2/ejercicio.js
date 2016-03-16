(function() {
    angular
        .module('directivas')
        .directive('ejercicioHolamundo2', function() {
            const ddo = {
                template: '<h1>Hola Mundo</h1>',
                restrict: 'A'
            };
            return ddo;
        });
}());
