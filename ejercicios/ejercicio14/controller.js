(function (){
  angular
    .module('directivas')
    .controller('Ejercicio14Ctrl', Controller);

  function Controller(){
    this.listadoHeroes = [
      {nombre: "Wolverine"},
      {nombre: "Banshee"},
      {nombre: "Coloso"}
    ];
  }
}());
