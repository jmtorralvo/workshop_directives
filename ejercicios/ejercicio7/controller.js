(function (){
  angular
    .module('directivas')
    .controller('Ejercicio7Ctrl', Controller);

  function Controller($scope){
  	$scope.foo = 'Variable del padre';

  	$scope.giveToday = function(){
  		return new Date();
  	}

  	$scope.myData ={
  		a : 1,
  		b: 2
  	}
  }
}());
