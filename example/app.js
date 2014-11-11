/**
 * My test app
 */
function generateAreaData () {
  var values = [];
  var data = [
    {label: 'Sqrt', values: []},
    {label: 'Cbrt', values: []},
    {label: '4th', values: []}
  ];
  for (var i = 0; i <= 128; i++) {
    var x2 = 20 * (i / 128);
    data[0].values.push({x: x2, y: Math.sqrt(x2)});
    data[1].values.push({x: x2, y: Math.pow(x2, (1/3)) });
    data[2].values.push({x: x2, y: Math.pow(x2, (1/4)) });
  }
  return data;
}

function generateBarData () {
  var data = [
    {label: 'Series 1', values: []},
    {label: 'Series 2', values: []},
    {label: 'Series 3', values: []}
  ];
  for (var i = 1; i <= 6; i++) {
    var x = String.fromCharCode(96 + i);
    data[0].values.push({ x: x, y: i });
    data[1].values.push({ x: x, y: Math.pow(i, 0.5) });
    data[2].values.push({ x: x, y: Math.log(i+1) });
  }
  return data;
}

function generateLineData () {
  var data1 = [{label: 'Layer 1', values: []}];
  for (var i = 0; i <= 128; i++) {
      var x = 20 * (i / 128) - 10,
          y = Math.cos(x) * x;
      data1[0].values.push({x: x, y: y});
  }
  var data2 = [
      {label: 'Layer 1', values: []},
      {label: 'Layer 2', values: []},
      {label: 'Layer 3', values: []}
  ];
  for (var i = 0; i < 256; i++) {
      var x = 40 * (i / 256) - 20;
      data2[0].values.push({ x: x, y: Math.sin(x) * (x / 4) });
      data2[1].values.push({ x: x, y: Math.cos(x) * (x / Math.PI) });
      data2[2].values.push({ x: x, y: Math.sin(x) * (x / 2) });
  }
  return data2;
}

function generateScatterData () {
  var DATA_LENGTH = 64;
  var data = [
    { label: 'A', values: [] },
    { label: 'B', values: [] },
    { label: 'C', values: [] }
  ];
  for (var i = 0; i < DATA_LENGTH; i++) {
    for (var j = 0; j < data.length; j++) {
      data[j].values.push({ x: (Math.random() * 1000), y: (Math.random() * 200) });
    }
  }
  return data;
}

function generateBubbleData () {
  var DATA_LENGTH = 24;
  var data = [
    { label: 'A', values: [] },
    { label: 'B', values: [] }
  ];
  for (var i = 0; i < DATA_LENGTH; i++) {
    for (var j = 0; j < data.length; j++) {
      data[j].values.push({ x: (Math.random() * 1000), y: (Math.random() * 200), r: Math.random()*15 + 1 });
    }
  }
  return data;
}

var liveAreaData = new RealTimeData(4);
var liveBarData = new RealTimeData(3);
var liveLineData = new RealTimeData(2);
var liveHeatmap = new HeatmapData(1);
var liveGaugeData = new GaugeData();

var aeTest = angular.module('aeTest', ['ng.epoch']);

aeTest.controller('chartController', ['$scope', '$timeout',
  function ($scope, $timeout) {
    // Static charts and graphs
    $scope.areaData = generateAreaData();
    $scope.barData = generateBarData();
    $scope.lineData = generateLineData();
    $scope.pieData = [
      { label: 'Slice 1', value: 10 },
      { label: 'Slice 2', value: 20 },
      { label: 'Slice 3', value: 40 },
      { label: 'Slice 4', value: 30 }
    ];
    $scope.scatterData = generateScatterData();
    $scope.bubbleData = generateBubbleData();
    // Realtime Area
    $scope.realtimeArea = liveAreaData.history();
    $scope.realtimeAreaFeed = liveAreaData.next();
    $scope.getNextLiveArea = function() {
      $scope.realtimeAreaFeed = liveAreaData.next();
      $timeout($scope.getNextLiveArea, 1000);
    }
    $timeout($scope.getNextLiveArea, 1000);
    // Realtime Bar
    $scope.realtimeBar = liveBarData.history();
    $scope.realtimeBarFeed = liveBarData.next();
    $scope.getNextLiveBar = function() {
      $scope.realtimeBarFeed = liveBarData.next();
      $timeout($scope.getNextLiveBar, 1000);
    }
    $timeout($scope.getNextLiveBar, 1000);
    // Realtime Line
    $scope.realtimeLine = liveLineData.history();
    console.log($scope.realtimeLine);
    $scope.realtimeLineFeed = liveLineData.next();
    $scope.getNextLiveLine = function() {
      $scope.realtimeLineFeed = liveLineData.next();
      $timeout($scope.getNextLiveLine, 1000);
    }
    $timeout($scope.getNextLiveLine, 1000);
    // Gauge
    $scope.gauge = liveGaugeData.next();
    $scope.gaugeFeed = liveGaugeData.next();
    $scope.getNextGauge = function() {
      $scope.gaugeFeed = liveGaugeData.next();
      $timeout($scope.getNextGauge, 1000);
    }
    $timeout($scope.getNextGauge, 1000);
    // Heatmap
    $scope.hmWindowSize = 60;
    $scope.hmBuckets = 20;
    $scope.hmBucketRange = [0, 100];
    $scope.hmOpacity = function(v, max) { return Math.pow((v/max), 0.7);};
    $scope.heatmap = liveHeatmap.history();
    $scope.heatmapFeed = liveHeatmap.next();
    $scope.feedHeatmap = function() {
      $scope.heatmapFeed = liveHeatmap.next();
      $timeout($scope.feedHeatmap, 1000);
    }
    $timeout($scope.feedHeatmap, 1000);

    $scope.areaAxes = ['left','right','bottom'];
    $scope.lineAxes = ['right','bottom'];
    $scope.scatterAxes = ['left','right','top','bottom'];
  }
]);
