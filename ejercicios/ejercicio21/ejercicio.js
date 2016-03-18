(function () {
  angular
    .module('directivas')
    .directive('ejercicioTarjeta2', function (){
      const ddo = {
        transclude: true,
        scope: { titulo: '=' },
        template: `
          <h3>{{tarjeta.titulo}}</h3>
          <content ng-transclude></content>
        `,
        controller: angular.noop,
        controllerAs: 'tarjeta',
        bindToController: true
      };
      return ddo;
    });
}());
