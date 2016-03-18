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
        controller: Controller
      };
      return ddo;
    })
    .factory('testDirectiva', function ($compile, $rootScope, $timeout, $q){
      return () => {
        let scope = $rootScope.$new();

        scope.guardaValor = function ($valor) {
          scope.contador = $valor;
        };

        let elemento = angular.element(`
            <ejercicio-test on-aumenta="guardaValor($valor)"></ejercicio-test>
          `);

        $timeout(() => {
          $compile(elemento)(scope);
        }, 0, false);

        return $q((resolve, reject) => {
          $timeout(()=>{
            let anchor = elemento.find('a');
            anchor[0].click();

            if (scope.contador === 1) resolve({resultado: 'OK'});
            else reject({resultado: 'KO'});

          },100)
        });
      }
    });
}());
