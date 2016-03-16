(function () {
  angular
    .module('directivas')
    .directive('ejercicioTest', function (){
      function Controller(){
        this.contador = 0;
        this.aumenta = () => {
          this.contador += 1;
          this.onAumenta({$valor: this.contador});
        }
      }
      const ddo = {
        template: `
          <p><a ng-click="vm.aumenta()">Click</a></p>
        `,
        scope: {
          onAumenta: '&'
        },
        controllerAs:'vm',
        bindToController: true,
        controller: Controller
      };
      return ddo;
    })
    .factory('testDirectiva', function ($compile, $rootScope, $timeout, $q){
      return () => {
        $timeout(() => {

        }, 0, false);

        return $q((resolve, reject) => {
          $timeout(()=>{

          },100)
        });
      }
    });
}());
