(function () {
  angular
    .module('directivas')
    .directive('ejercicioTarjeta4', function (){
      const ddo = {
        transclude: true,
        template: `
          <p>Antes</p>
          <my-transclude></my-transclude>
          <p>Después</p>
        `
      };
      return ddo;
    })
    .directive('myTransclude', function (){
      const ddo = {
        link: function (scope, elem, attrs, ctrls, transcludeFn) {
          transcludeFn(function(clone) {
            elem.empty();
            elem.append(clone);
          })
        }
      }
      return ddo;
    });
}());
