(function () {
  angular
    .module('directivas')
    .directive('seleccionaWolverine', function () {
      const ddo = {
        require: 'seleccionSuperheroes',
        link: function (scope, element, attrs, seleccionSuperheroesCtrl) {
          seleccionSuperheroesCtrl.assignHeroName('Wolverine');
        },
        controller: angular.noop,
        controllerAs: 'seleccionaWolverine',
        bindToController: true
      };
      return ddo;
    });
}());
