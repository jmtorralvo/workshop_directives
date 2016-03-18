(function() {
    angular
        .module('directivas')
        .directive('ejercicioHeroes3', function() {
            const ddo = {
                restrict: 'E',
                controller: heroes3Ctrl,
                controllerAs: 'vm',
                bindToController: true,
                template: '<ul><li ng-repeat="hero in vm.equipo"><input type="checkbox" ng-model=hero.fav> <span>{{hero.nombre}}</span></li></ul>',
                scope: {
                    equipo: '='
                }
            };
            return ddo;

            function heroes3Ctrl() {

            }
        });

    angular
        .module('directivas')
        .filter('soloFavoritos',
            () => 
              (input) => input.filter(input=>input.fav)
        );
}());
