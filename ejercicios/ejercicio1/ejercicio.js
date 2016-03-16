(function() {
    angular
        .module('directivas')
        .directive('ejercicioHolamundo1', function() {
            const ddo = {
                link: link,
                template: '<h1>Hola Mundo, {{nam}}</h1>',
                restrict: 'E',
                scope : {
                	nam : '@'
                }
            };
            return ddo;

            function link(scope, element, attrs) {
                console.log('linked');
            }
        });
}());
