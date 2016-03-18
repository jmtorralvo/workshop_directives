(function () {
  angular
    .module('directivas')
    .directive('ejercicioTarjetas', function (){
      const ddo = {
        transclude: true,
        template: function (elem, attrs) {
          return `<h3>{{${attrs.nombreequipo}}}</h3>`;
        },
        link: function (scope, elem, attrs, ctrls, transcludeFn) {
          let miembros = scope.$eval(attrs.equipo);
          miembros.forEach(function (miembro, index) {
              let childScope = scope.$new();
              childScope.$heroe = miembro;
              childScope.$index = index;
              transcludeFn(childScope, function (clone) {
                elem.append(clone);
              });
          });
        }
      };
      return ddo;
    });
}());
