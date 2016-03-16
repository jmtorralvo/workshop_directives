(function() {
    angular
        .module('directivas')
        .directive('validatePar', function() {
            const ddo = {
                restric: 'A',
                link : link,
                require: "ngModel"
            };
            return ddo;

            function link(scope, element, attrs, controllers) {
                controllers.$parsers.unshift( (value)=> {
                    let validationPar = (value%2!==0) ? false :  true;
                    let valVacio = (value==='') ? true : false;
                    controllers.$setValidity('par', validationPar);
                    controllers.$setValidity('vacio', valVacio);
                });
            }
        });
}());
