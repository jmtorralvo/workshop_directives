(function (){
  angular
    .module('directivas')
    .controller('Ejercicio13Ctrl', Controller);

  function Controller(){
    this.listadoHeroes = [
      {nombre: "Wolverine"},
      {nombre: "Banshee"},
      {nombre: "Coloso"}
    ];
  }
}());
