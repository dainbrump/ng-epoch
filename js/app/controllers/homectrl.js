'use strict';

nge.controller('HomeCtrl', ['$scope', 'DataService', '$timeout',
  function ($scope, DataService, $timeout) {
    var liveLine  = DataService.RealTimeData(3);
    $scope.showcase = {
      interval: 5000,
      twoAxes: ['left','bottom'],
      threeAxes: ['left','right','bottom'],
      fourAxes: ['left','right','top','bottom'],
      areaData: DataService.generateAreaData(),
      barData: DataService.generateBarData(),
      lineData: DataService.generateLineData(),
      scatterData: DataService.generateScatterData(),
      realtimeLine: liveLine.history(),
      realtimeLineFeed: liveLine.next()
    };

    $scope.getNextLive = function() {
      $scope.showcase.realtimeLineFeed = liveLine.next();
      $timeout($scope.getNextLive, 1500);
    }
    $timeout($scope.getNextLive, 1500);
  }
]);