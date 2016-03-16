(function () {
  angular
    .module('directivas')
    .directive('ejercicioHeroes1', function (){
      const ddo = {
            	restrict : 'E',
                template: '<h3>{{supertitulo}}</h3>',
                controller: heroesDirCtrl,
                scope: {
                    titulo: '@'
                }
            };
            return ddo;

            function heroesDirCtrl($scope) {
                $scope.supertitulo = $scope.titulo;
            }
    });
}());
