(function() {
    angular
        .module('directivas')
        .directive('validateSoloemes', function($q, $timeout) {
            const ddo = {
                restric: 'A',
                link: link,
                require: 'ngModel'
            };
            return ddo;

            function link(scope, element, attrs, controllers) {

                controllers.$asyncValidators.soloEmes = (modelValue, value)=> {
                	let def = $q.defer();
                    if (controllers.$isEmpty(modelValue)) {
                       //Devuelve una promesa resuelta, pero que no ha sido aceptada o rechazada. 
                       return $q.when();
                    }
                    $timeout( () => {
                        (value.split('').filter((el)=>el==='m').length < value.length) ? def.reject()
                        																: def.resolve();
                    }, 1000);

                    return def.promise;
                };
            }
        });

}());