(function(){
  'use strict';
  angular
    .module('directivas')
    .config(config);

  function config($routeProvider, numEjercicios) {
     for(let i = 0; i < numEjercicios; i++) {
      $routeProvider
          .when(`/${i}`, {
            templateUrl: `ejercicios/ejercicio${i}/template.html`,
            controller: `Ejercicio${i}Ctrl`,
            controllerAs: 'vm'
          })
    }
    $routeProvider
      .otherwise('/0');
  }
}());
