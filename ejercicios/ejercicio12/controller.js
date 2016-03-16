(function (){
  angular
    .module('directivas')
    .controller('Ejercicio12Ctrl', Controller);

  function Controller(){
    this.listadoHeroes = [
      {nombre: "Wolverine"},
      {nombre: "Banshee"}, 
      {nombre: "Coloso"}
    ];
  }
}());
