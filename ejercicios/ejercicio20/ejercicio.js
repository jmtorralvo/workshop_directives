(function () {
  angular
    .module('directivas')
    .directive('ejercicioTarjeta', function (){
      const ddo = {
        transclude: true,
        scope: { titulo: '=' },
        template: `
          <h3>{{tarjeta.titulo}}</h3>
          <content></content>
        `,
        link: function (scope, elem, attrs, ctrls, transcludeFn) {
          let content = elem.find('content');

          transcludeFn(function (clone) {
            content.append(clone);
          });
        },
        controller: angular.noop,
        controllerAs: 'tarjeta',
        bindToController: true
      };
      return ddo;
    });
}());
