'use strict';

nge.controller('ExamplesCtrl', ['$scope', 'DataService', 'OptionsObject',
  function ($scope, DataService, OptionsObject) {
    $scope.open = new Array(true);
    $scope.examples = {
      twoAxes: ['left','bottom'],
      threeAxes: ['left','right','bottom'],
      fourAxes: ['left','right','top','bottom'],
      areaData: DataService.generateAreaData(),
      barData: DataService.generateBarData(),
      lineData: DataService.generateLineData(),
      pieData: [
        {label:'Al',value: 10 },{label:'Joe',value: 20 },
        {label:'Mike',value: 40 },{label:'Tom',value: 30 }
      ],
      scatterData: DataService.generateScatterData(),
      bubbleData: DataService.generateBubbleData()
    };
    $scope.details = OptionsObject;
  }
]);