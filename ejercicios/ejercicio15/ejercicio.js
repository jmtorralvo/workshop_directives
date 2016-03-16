(function () {
  angular
    .module('directivas')
    .directive('ejercicioHeroes5', function (){
      const ddo = {
                restrict: 'E',
                link : link,
                controller: heroes5Ctrl,
                controllerAs: 'vm',
                bindToController: true,
                template: '<ul><li ng-repeat="hero in vm.equipo"><button ng-click="vm.selectHero(hero)">Seleccionar</button> <span>{{hero.nombre}}</span></li></ul>',
                scope: {
                	equipo : '=',
                    heroeSeleccionado: '&'
                }
            };
            return ddo;

            function heroes5Ctrl() {
            	
            	this.selectHero = (hero)=>{
            		console.log(hero);
                    this.heroeSeleccionado({ $heroe: hero });
            	}
            }

            function link(scope, element, attrs, controllers){

           
            }
    });

}());
