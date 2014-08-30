'use strict';

nge.controller('HomeCtrl', ['$scope', 'DataService',
  function ($scope, DataService) {
    $scope.showcase = {
      interval: 5000,
      twoAxes: ['left','bottom'],
      threeAxes: ['left','right','bottom'],
      fourAxes: ['left','right','top','bottom'],
      areaData: DataService.generateAreaData(),
      barData: DataService.generateBarData(),
      lineData: DataService.generateLineData(),
      scatterData: DataService.generateScatterData(),
    };
  }
]);