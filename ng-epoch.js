'use strict';

(function (angular) {
  var ngEpoch = angular.module('ng.epoch', []);

  var allOptions = {
    chartAxes: '=',
    chartTicks: '=',
    chartTickFormats: '=',
    chartDomain: '=',
    chartRange: '=',
    chartMargins: '=',
    chartMargin: '=',
    chartInner: '=',
    chartWidth: '=',
    chartHeight: '=',
    chartData: '=',
    chartClass: '=',
    chartOrientation: '=',
    chartPadding: '=',
    chartOuterPadding: '=',
    chartRadius: '=',
    chartFps: '=',
    chartFormat: '=',
    chartWindowSize: '=',
    chartHistorySize: '=',
    chartQueueSize: '=',
    chartPixelRatio: '=',
    chartBuckets: '=',
    chartBucketRange: '=',
    chartBucketPadding: '=',
    chartOpacity: '=',
    chartPaintZeroValues: '=',
    chartStream: '=',
    gaugeValue: '=',
    gaugeDialSize: '=',
    gaugeFormat: '=',
    gaugeStream: '='
  };

  var baseDirective = {
    restrict: 'E',
    replace: true,
    template: '<div class="epoch"></div>',
    scope: angular.copy(allOptions),
    controller: 'epochController'
  };

  ngEpoch.controller('epochController', function ($scope) {
    $scope.filterOptions = function () {
      var results = {};
      angular.forEach($scope, function (v, k) {
        if ( (k.indexOf('chart') === 0 || k.indexOf('gauge') === 0) &&
             (k !== 'chartClass' && k !== 'gaugeDialSize') ) {
          if (v) {
            var key = k.substring(5);
            var newKey = key.charAt(0).toLowerCase() + key.slice(1);
            this[newKey] = v;
          }
        }
      }, results);
      return results;
    };
  });

  ngEpoch.directive('epochArea', function () {
    var areaFunction = function (scope, elem, attr) {
      if (scope.chartClass) { elem.addClass(scope.chartClass); }
      var options = scope.filterOptions();
      options.type = 'area';
      elem.epoch(options);
    };
    return angular.extend(angular.copy(baseDirective), {link: areaFunction});
  });

  ngEpoch.directive('epochLiveArea', function ($timeout) {
    var liveAreaFunction = function (scope, elem, attr) {
      if (scope.chartClass) { elem.addClass(scope.chartClass); }
      var options = scope.filterOptions();
      options.type = 'time.area';
      var liveArea = elem.epoch(options);
      scope.$watch('chartStream', function() {
        liveArea.push(scope.chartStream);
      });
    };
    return angular.extend(angular.copy(baseDirective), {link: liveAreaFunction});
  });

  ngEpoch.directive('epochBar', function () {
    var barFunction = function (scope, elem, attr) {
      if (scope.chartClass) { elem.addClass(scope.chartClass); }
      var options = scope.filterOptions();
      options.type = 'bar';
      elem.epoch(options);
    };
    return angular.extend(angular.copy(baseDirective), {link: barFunction});
  });

  ngEpoch.directive('epochLiveBar', function () {
    var liveBarFunction = function (scope, elem, attr) {
      if (scope.chartClass) { elem.addClass(scope.chartClass); }
      var options = scope.filterOptions();
      options.type = 'time.bar';
      var liveBar = elem.epoch(options);
      scope.$watch('chartStream', function() {
        liveBar.push(scope.chartStream);
      });
    };
    return angular.extend(angular.copy(baseDirective), {link: liveBarFunction});
  });

  ngEpoch.directive('epochLine', function () {
    var lineFunction = function (scope, elem, attr) {
      if (scope.chartClass) { elem.addClass(scope.chartClass); }
      var options = scope.filterOptions();
      options.type = 'line';
      elem.epoch(options);
    };
    return angular.extend(angular.copy(baseDirective), {link: lineFunction});
  });

  ngEpoch.directive('epochLiveLine', function () {
    var liveLineFunction = function (scope, elem, attr) {
      if (scope.chartClass) { elem.addClass(scope.chartClass); }
      var options = scope.filterOptions();
      options.type = 'time.line';
      var liveLine = elem.epoch(options);
      scope.$watch('chartStream', function() {
        liveLine.push(scope.chartStream);
      });
    };
    return angular.extend(angular.copy(baseDirective), {link: liveLineFunction});
  });

  ngEpoch.directive('epochPie', function () {
    var pieFunction = function (scope, elem, attr) {
      if (scope.chartClass) { elem.addClass(scope.chartClass); }
      var options = scope.filterOptions();
      options.type = 'pie';
      elem.epoch(options);
    };
    return angular.extend(angular.copy(baseDirective), {link: pieFunction});
  });

  ngEpoch.directive('epochScatter', function () {
    var linkFunction = function (scope, elem, attr) {
      if (scope.chartClass) { elem.addClass(scope.chartClass); }
      var options = scope.filterOptions();
      options.type = 'scatter';
      elem.epoch(options);
    };
    return angular.extend(angular.copy(baseDirective), {link: linkFunction});
  });

  ngEpoch.directive('epochGauge', function () {
    var gaugeFunction = function (scope, elem, attr) {
      if (scope.chartClass) { elem.addClass(scope.chartClass); }
      var gClass = (scope.gaugeDialSize) ? scope.gaugeDialSize : 'gauge-small';
      elem.addClass(gClass);
      var options = scope.filterOptions();
      options.type = 'time.gauge';
      var gauge = elem.epoch(options);
      scope.$watch('gaugeStream', function() {
        gauge.update(scope.gaugeStream);
      });
    };
    return angular.extend(angular.copy(baseDirective), {link: gaugeFunction});
  });

  ngEpoch.directive('epochHeatmap', function () {
    var heatmapFunction = function (scope, elem, attr) {
      if (scope.chartClass) { elem.addClass(scope.chartClass); }
      var options = scope.filterOptions();
      options.type = 'time.heatmap';
      var heatmap = elem.epoch(options);
      scope.$watch('chartStream', function() {
        heatmap.push(scope.chartStream);
      });
    };
    return angular.extend(angular.copy(baseDirective), {link: heatmapFunction});
  });

})(angular);