(function() {
    angular
        .module('directivas')
        .directive('ejercicioHolamundo0', ejercicioHolamundo0);

    function ejercicioHolamundo0() {
        var directive = {
            link: link,
            template: '<h1>Hola Mundo</h1>',
            restrict: 'AE'
        };
        return directive;

        function link(scope, element, attrs) {
            console.log('linked');
        }
    }

}());

