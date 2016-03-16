(function() {
    angular
        .module('directivas')
        .directive('ejercicioHeroes0', function() {
            const ddo = {
            	restrict : 'E',
                template: '<h3>{{vm.titulo}}</h3>',
                controller: heroesDirCtrl,
                controllerAs: 'vm',
                bindToController: true,
                scope: {
                    titulo: '@'
                }
            };
            return ddo;

            function heroesDirCtrl() {
                console.log(this);
            }
        });
}());
