(function(angular) {
  'use strict';

  var liveAreaData = new RealTimeData(4);
  var liveBarData = new RealTimeData(3);
  var liveLineData = new RealTimeData(2);
  var liveHeatmap = new HeatmapData(1);
  var liveGaugeData = new GaugeData();

  var chartController = function($timeout) {
    var charts = angular.extend(this, {
      areaAxes: ['left','right','bottom'],
      lineAxes: ['right','bottom'],
      scatterAxes: ['left','right','top','bottom'],
      pieData: [
        {label: 'Slice 1', value: 10},
        {label: 'Slice 2', value: 20},
        {label: 'Slice 3', value: 40},
        {label: 'Slice 4', value: 30}
      ],
      areaData: (function() {
        var data = [
          {label: 'Sqrt', values: []},
          {label: 'Cbrt', values: []},
          {label: '4th', values: []}
        ];
        for (var i = 0; i <= 128; i++) {
          var x2 = 20 * (i / 128);
          data[0].values.push({x: x2, y: Math.sqrt(x2)});
          data[1].values.push({x: x2, y: Math.pow(x2, (1 / 3))});
          data[2].values.push({x: x2, y: Math.pow(x2, (1 / 4))});
        }
        return data;
      })(),
      barData: (function() {
        var data = [
          {label: 'Series 1', values: []},
          {label: 'Series 2', values: []},
          {label: 'Series 3', values: []}
        ];
        for (var i = 1; i <= 6; i++) {
          var x = String.fromCharCode(96 + i);
          data[0].values.push({x: x, y: i});
          data[1].values.push({x: x, y: Math.pow(i, 0.5)});
          data[2].values.push({x: x, y: Math.log(i + 1)});
        }
        return data;
      })(),
      lineData: (function() {
        var data = [
            {label: 'Layer 1', values: []},
            {label: 'Layer 2', values: []},
            {label: 'Layer 3', values: []}
        ];
        for (var j = 0; j < 256; j++) {
          var x = 40 * (j / 256) - 20;
          data[0].values.push({x: x, y: Math.sin(x) * (x / 4)});
          data[1].values.push({x: x, y: Math.cos(x) * (x / Math.PI)});
          data[2].values.push({x: x, y: Math.sin(x) * (x / 2)});
        }
        return data;
      })(),
      scatterData: (function() {
        var data = [
          {label: 'A', values: []},
          {label: 'B', values: []},
          {label: 'C', values: []}
        ];
        for (var i = 0; i < 64; i++) {
          for (var j = 0; j < data.length; j++) {
            data[j].values.push({x: (Math.random() * 1000), y: (Math.random() * 200)});
          }
        }
        return data;
      })(),
      bubbleData: (function() {
        var data = [
          {label: 'A', values: []},
          {label: 'B', values: []}
        ];
        for (var i = 0; i < 24; i++) {
          for (var j = 0; j < data.length; j++) {
            data[j].values.push({x: (Math.random() * 1000), y: (Math.random() * 200), r: Math.random() * 15 + 1});
          }
        }
        return data;
      })()
    });
    // Realtime Area
    charts.realtimeArea = liveAreaData.history();
    charts.realtimeAreaFeed = liveAreaData.next();
    charts.getNextLiveArea = function() {
      charts.realtimeAreaFeed = liveAreaData.next();
      $timeout(charts.getNextLiveArea, 1000);
    };
    $timeout(charts.getNextLiveArea, 1000);
    // Realtime Bar
    charts.realtimeBar = liveBarData.history();
    charts.realtimeBarFeed = liveBarData.next();
    charts.getNextLiveBar = function() {
      charts.realtimeBarFeed = liveBarData.next();
      $timeout(charts.getNextLiveBar, 1000);
    };
    $timeout(charts.getNextLiveBar, 1000);
    // Realtime Line
    charts.realtimeLine = liveLineData.history();
    charts.realtimeLineFeed = liveLineData.next();
    charts.getNextLiveLine = function() {
      charts.realtimeLineFeed = liveLineData.next();
      $timeout(charts.getNextLiveLine, 1000);
    };
    $timeout(charts.getNextLiveLine, 1000);
    // Gauge
    charts.gauge = liveGaugeData.next();
    charts.gaugeFeed = liveGaugeData.next();
    charts.getNextGauge = function() {
      charts.gaugeFeed = liveGaugeData.next();
      $timeout(charts.getNextGauge, 1000);
    };
    $timeout(charts.getNextGauge, 1000);
    // Heatmap
    charts.hmWindowSize = 60;
    charts.hmBuckets = 20;
    charts.hmBucketRange = [0, 100];
    charts.hmOpacity = function(v, max) { return Math.pow((v / max), 0.7);};
    charts.heatmap = liveHeatmap.history();
    charts.heatmapFeed = liveHeatmap.next();
    charts.feedHeatmap = function() {
      charts.heatmapFeed = liveHeatmap.next();
      $timeout(charts.feedHeatmap, 1000);
    };
    $timeout(charts.feedHeatmap, 1000);

    var odd = true;
    charts.updateLine2 = function() {
      charts.line2Height = Math.floor(Math.random() * (300 - 150 + 1) + 150);
      charts.lineData2 = (function() {
        var data = [
            {label: 'Layer 1', values: []},
            {label: 'Layer 2', values: []},
            {label: 'Layer 3', values: []}
        ];
        var range = Math.floor(Math.random() * (300 - 256 + 1) + 256);
        var xVal = Math.floor(Math.random() * (40 - 20 + 1) + 20);
        for (var j = 0; j < range; j++) {
          var x = xVal * (j / range) - 20;
          data[0].values.push({x: x, y: Math.sin(x) * (x / 4)});
          data[1].values.push({x: x, y: Math.cos(x) * (x / Math.PI)});
          data[2].values.push({x: x, y: Math.sin(x) * (x / 2)});
        }
        return data;
      })();
      if (odd) {
        charts.line2Axes = ['right','bottom'];
      } else {
        charts.line2Axes = ['left', 'bottom'];
      }
      odd = !odd;
    };
    charts.updateLine2();
    charts.updatePie2 = function() {
      //charts.pie2Height = ;
      //charts.pie2Width = ;
      //charts.pieData2 = ;
    };
  };

  chartController.$inject = ['$timeout'];

  angular.module('ngEpochTestApp', ['ng.epoch']).controller('chartController', chartController);

})(angular);
