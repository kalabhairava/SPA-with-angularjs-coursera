(function () {
  'use strict';

  angular.module('shoppingApp', [])
        .controller('shoppingAppCtrl', shoppingAppCtrl);

  shoppingAppCtrl.$inject = ['$scope'];
  function shoppingAppCtrl($scope) {
    $scope.toBuyList = [
      {
        "name": "cookies",
        "quantity": 10
      },
      {
        "name": "Chips",
        "quantity": 3
      },
      {
        "name": "Dates",
        "quantity": 2
      },
      {
        "name": "Cashews",
        "quantity": 5
      },
      {
        "name": "Chocolates",
        "quantity": 100
      }
    ];

  $scope.boughtList = [];

  $scope.buy = function (index) {
      $scope.boughtList.push($scope.toBuyList[index]);
      $scope.toBuyList.splice(index, 1);
    };

    console.log("!BoughtList = ", !$scope.boughtList.length);
  };
})();
