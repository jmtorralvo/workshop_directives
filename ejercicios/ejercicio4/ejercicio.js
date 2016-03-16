(function() {
    angular
        .module('directivas')
        .directive('ejercicioHoy0', function() {
            const ddo = {
                link: link,
                restrict: 'E',
                template: '<h1>Hoy es {{today | date:"dd/MM/yyyy"}}</h1><h2>dsaf: {{foo}}</h2>',
                scope:{
                	baz : '@'
                }
            };
            return ddo;

            function link(scope, element, attrs){
            	scope.today = new Date();
            	console.log(scope.$parent.foo);
            }
        });
}());
