(function () {
  'use strict';

  angular.module('ShoppingApp',[])
          .controller('ToBuyListCtrl', ToBuyListCtrl)
          .controller('AlreadyBoughtListCtrl', AlreadyBoughtListCtrl)
          .service('ShoppingService', ShoppingService);

  ToBuyListCtrl.$inject = ['ShoppingService'];

  function ToBuyListCtrl (ShoppingService) {
      var buyItemCtrl = this;

      buyItemCtrl.toBuyList = ShoppingService.toBuyList;
      buyItemCtrl.buy = function(index) {
        ShoppingService.buy(index);
      };
  };

  AlreadyBoughtListCtrl.$inject = ['ShoppingService'];

  function AlreadyBoughtListCtrl (ShoppingService) {
    this.alreadyBoughtList = ShoppingService.alreadyBoughtList;
  };

  function ShoppingService() {

    var service = this;
    service.toBuyList = [
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

    service.alreadyBoughtList = [];

    service.buy = function(index) {
      service.alreadyBoughtList.push(service.toBuyList[index]);
      service.toBuyList.splice(index, 1);
    };
  };
})();
