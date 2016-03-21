(function () {
  angular
    .module('directivas')
    .directive('seleccionSuperheroes', function ($q, $timeout){
      const ddo = {
        template: `
          <button type="button" ng-click="seleccion.assignHeroName('Wolverine')">Wolverine</button>
          <button type="button" ng-click="seleccion.assignHeroName('Beast')">Beast</button>
          <button type="button" ng-click="seleccion.heroe.nombre = 'Spiderman'">Spiderman</button>
        `,
        scope: {
          heroe: '=ngModel'
        },
        controller: function () {
          let seleccion = this;
          seleccion.assignHeroName = name => {
            seleccion.heroe = seleccion.heroe || {};
            seleccion.heroe.nombre = name;
          }
        },
        controllerAs: 'seleccion',
        bindToController: true
      };
      return ddo;
    });

}());
