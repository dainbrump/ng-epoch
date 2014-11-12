'use strict';

nge.controller('ExamplesCtrl', ['$scope', '$timeout', 'DataService', 'OptionsObject',
  function ($scope, $timeout, DataService, OptionsObject) {
    var liveArea  = DataService.RealTimeData(4);
    var liveBar   = DataService.RealTimeData(3);
    var liveLine  = DataService.RealTimeData(2);
    var Heatmap   = DataService.HeatmapData(1);
    // Making 4 instances of the GaugeData object for showcasing the four sizes of gauge with different data values.
    var Gauge = [ DataService.GaugeData(), DataService.GaugeData(), DataService.GaugeData(), DataService.GaugeData() ];

    // Setup our examples.
    /*$scope.examples = {
      heatmap: Heatmap.history(),
      heatmapFeed: Heatmap.next(),
      hmWindowSize: 60,
      hmBuckets: 20,
      hmBucketRange: [0, 100],
      hmOpacity: function(v, max) { return Math.pow((v/max), 0.7);}
    };*/

    // Load ng-epoch metadata
    $scope.details = OptionsObject;

    $scope.showChart = function (index) {
      $scope.current = $scope.charts[index];
      $scope.current.idx = index;
    };

    $scope.charts = [
      {
        shortName: 'Area',
        example: 'js/app/views/examples/epoch-area.html',
        code: '<epoch-area chart-height="200" chart-data="[DATA]"></epoch-area>',
        optRef: 'epochArea',
        attribute: null,
        options: {
          data: DataService.generateAreaData(),
          axes: ['left','right','bottom']
        }
      },{
        shortName: 'Bar',
        example: 'js/app/views/examples/epoch-bar.html',
        code: '<epoch-bar chart-height="200" chart-data="[DATA]"></epoch-bar>',
        optRef: 'epochBar',
        attribute: null,
        options: {
          data: DataService.generateBarData(),
          axes: ['left','bottom']
        }
      },{
        shortName: 'Line',
        example: 'js/app/views/examples/epoch-line.html',
        code: '<epoch-line chart-height="200" chart-data="[DATA]"></epoch-line>',
        optRef: 'epochLine',
        attribute: null,
        options: {
          data: DataService.generateLineData(),
          axes: ['left','right','bottom']
        }
      },{
        shortName: 'Pie / Donut',
        example: 'js/app/views/examples/epoch-pie.html',
        code: '<epoch-pie chart-height="200" chart-width="200" chart-data="[DATA]"></epoch-pie>',
        optRef: 'epochPie',
        attribute: null,
        options: [
          { data: DataService.generatePieData(4) },
          { data: DataService.generatePieData(4) }
        ]
      },{
        shortName: 'Scatter',
        example: 'js/app/views/examples/epoch-scatter.html',
        code: '<epoch-scatter chart-height="200" chart-data="[DATA]"></epoch-scatter>',
        optRef: 'epochScatter',
        attribute: null,
        options: [
          { data: DataService.generateScatterData(), axes: ['left','right','top','bottom']},
          { data: DataService.generateBubbleData(), axes: ['left','right','top','bottom']}
        ]
      },{
        shortName: 'Live Area',
        example: 'js/app/views/examples/epoch-live-area.html',
        code: '<epoch-live-area chart-height="200" chart-data="[INITIAL_DATA]" chart-stream="[DATA_UPDATES]"></epoch-live-area>',
        optRef: 'epochLiveArea',
        attribute: null,
        options: {
          data: liveArea.history(),
          axes: ['left','right','bottom']
        }
      },{
        shortName: 'Live Bar',
        example: 'js/app/views/examples/epoch-live-bar.html',
        code: '<epoch-live-bar chart-height="200" chart-data="[INITIAL_DATA]" chart-stream="[DATA_UPDATES]"></epoch-live-bar>',
        optRef: 'epochLiveBar',
        attribute: null,
        options: {
          data: liveBar.history(),
          axes: ['left','bottom']
        }
      },{
        shortName: 'Live Line',
        example: 'js/app/views/examples/epoch-live-line.html',
        code: '<epoch-live-line chart-height="200" chart-data="[INITIAL_DATA]" chart-stream="[DATA_UPDATES]"></epoch-live-line>',
        optRef: 'epochLiveLine',
        attribute: null,
        options: {
          data: liveLine.history(),
          axes: ['left','right','bottom']
        }
      },{
        shortName: 'Gauges',
        example: 'js/app/views/examples/epoch-gauge.html',
        code: '<epoch-gauge gauge-value="[INITIAL_DATA]" gauge-stream="[DATA_UPDATES]"></epoch-gauge>',
        optRef: 'epochGauge',
        attribute: null,
        options: [
          {data: Gauge[0].next(), dialSize: 'gauge-large' },
          {data: Gauge[1].next(), dialSize: 'gauge-medium' },
          {data: Gauge[2].next(), dialSize: 'gauge-small' },
          {data: Gauge[3].next(), dialSize: 'gauge-tiny' }
        ]
      },{
        shortName: 'Heatmap',
        example: 'js/app/views/examples/epoch-heatmap.html',
        code: '<epoch-heatmap chart-height="200" chart-data="[INITIAL_DATA]" chart-stream="[DATA_UPDATES]" chart-window-size="60" chart-buckets="20" chart-bucket-range="[0,100]" chart-opacity="[FUNCTION]"></epoch-heatmap>',
        optRef: 'epochHeatmap',
        attribute: null,
        options: {
          data: Heatmap.history(),
          axes: ['left','right','bottom'],
          hmWindowSize: 60,
          hmBuckets: 20,
          hmBucketRange: [0, 100],
          hmOpacity: function(v, max) { return Math.pow((v/max), 0.7);}
        }
      }];
    // Set the timeout loop
    $scope.getNextLive = function() {
      $scope.charts[5].options.stream = liveArea.next();
      $scope.charts[6].options.stream = liveBar.next();
      $scope.charts[7].options.stream = liveLine.next();
      $scope.charts[8].options[0].stream = Gauge[0].next();
      $scope.charts[8].options[1].stream = Gauge[1].next();
      $scope.charts[8].options[2].stream = Gauge[2].next();
      $scope.charts[8].options[3].stream = Gauge[3].next();
      $scope.charts[9].options.stream = Heatmap.next();
      $timeout($scope.getNextLive, 1000);
    }
    $timeout($scope.getNextLive, 1000);

    $scope.showChart(0);
  }
]);
