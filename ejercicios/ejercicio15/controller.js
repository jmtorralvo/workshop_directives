(function (){
  angular
    .module('directivas')
    .controller('Ejercicio15Ctrl', Controller);

  function Controller(){
    this.listadoHeroes = [
      {nombre: "Wolverine"},
      {nombre: "Banshee"},
      {nombre: "Coloso"}
    ];
  }
}());
