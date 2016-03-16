(function () {
  angular
    .module('directivas')
    .directive('ejercicioHoy1', function (){
      const ddo = {
      		controller: ejercicio5Ctrl,
      		restrict : 'E',
      		template : '<h1>Hoy es {{today}}</h1>'
      };
      return ddo;

      function ejercicio5Ctrl($filter, $scope){
      		$scope.today = $filter('date')(new Date(),"dd/MM/yyyy");
      }

    });
}());
