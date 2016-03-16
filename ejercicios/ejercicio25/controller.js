(function (){
  angular
    .module('directivas')
    .controller('Ejercicio25Ctrl', Controller);

  function Controller(testDirectiva){
    testDirectiva().then(
      () => this.resultado = 'OK',
      () => this.resultado = 'KO'
    )
  }
}());
