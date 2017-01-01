(function() {
    'use strict';

    angular.module('app', [])
        .controller('MainCtrl', function ($scope) {

            $scope.checkIfTooMuch = function() {
                if (!$scope.userInput) {
                    $scope.message = "Please enter data first";
                } else {
                    var noOfItems = $scope.getTheNoOfItems($scope.userInput);

                    if (noOfItems === 0) {
                        $scope.message = "Ah! Seems like you're fasting :D";
                    } else if (noOfItems <= 3) {
                        $scope.message = "Enjoy!";
                    } else {
                        $scope.message = "Too much!";
                    }
                }
            };

            $scope.getTheNoOfItems = function (userInput) {
                var len = 0;
                var items = userInput.split(',');

                for (var i = 0; i < items.length; i++){
                    if(items[i]  && items[i].replace(/\s*/g, '').length){
                        len++;
                    }
                }

                return len;
            };
        });
})();
