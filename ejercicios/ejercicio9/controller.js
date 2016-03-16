(function (){
  angular
    .module('directivas')
    .controller('Ejercicio9Ctrl', Controller);

  function Controller($scope){
  	$scope.today = new Date();
  }
}());
