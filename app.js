
    'use strict';

    angular.module('app', [])
        .controller('MainCtrl', function($scope) {
            $scope.name = "";

            $scope.sayHello = function() {
                console.log("Hello, you beautiful world!");
            }

            } );
