(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.dishes = "";
  $scope.message = "";
  $scope.messageColor = "";
  $scope.evaluate = function () {
  var message = formMessage($scope.dishes);
  $scope.message = message;

};

function formMessage(string) {
  var arrayOfdishes = string.split(",");
  var arrayOfdishes = arrayOfdishes.filter(v=>v.trim()!='');
  var numOfDishes = arrayOfdishes.length ;
  console.log('The string is: "' + string + '"')
  console.log('The length of string is: "' + numOfDishes + '"')
  if(arrayOfdishes == ""){
    $scope.messageColor = "red";
    return "Please enter data first";
  }else if(numOfDishes <= 3){
    $scope.messageColor = "green";
    return "Enjoy!";
  }else {
    $scope.messageColor = "green";
    return "Too much!";
  }
}
}
})();
