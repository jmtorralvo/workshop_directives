(function () {
  angular
    .module('directivas')
    .directive('ejercicioTarjeta4', function (){
      const ddo = {
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
      }
      return ddo;
    });
}());
