(function (){
  angular
    .module('directivas')
    .controller('Ejercicio23Ctrl', Controller);

  function Controller(){
    this.nombreEquipo = 'Equipo A';
    this.equipo = [
      {nombre: 'John "Hannibal" Smith'},
      {nombre: 'Howling Mad Murdock '},
      {nombre: 'Templeton Peck Faceman'},
      {nombre: 'B. A. Baracus'}
    ]
  }
}());
