(function () {
  angular
    .module('directivas')
    .directive('ejercicioHolamundo3', function (){
      const ddo = {
      	restrict : 'E',
      	template : '<h1>Hola Mundo template</h1>'
      };
      return ddo;
    });
}());
