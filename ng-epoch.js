(function(angular) {
  'use strict';

  var allOptions = {
    options: '=?',
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
    chartData: '<',
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
    chartStream: '<?',
    gaugeValue: '=',
    gaugeDialSize: '=',
    gaugeFormat: '=',
    gaugeStream: '<?'
  };

  var EpochController = function($scope, $element) {
    this.options = this.options || {};
    this.renderEpoch = function() {
      var container = angular.element($element[0].childNodes[0]);
      var type = $element[0].nodeName.toLowerCase().replace('epoch-', '').replace('live-', 'time.');
      this.options.type = (type === 'gauge' || type === 'heatmap') ? 'time.' + type : type;
      if (this.chartClass) {
        container.addClass(this.chartClass);
      }
      if (this.options.type === 'time.gauge') {
        container.addClass(this.gaugeDialSize || 'gauge-small');
      }
      this.epochObj = container.epoch(this.options);
    };
    this.filterOptions = function() {
      angular.forEach(this, function(v, k) {
        var validKey = ((k.indexOf('chart') > -1 || k.indexOf('gauge') > -1) && (k !== 'chartClass' && k !== 'gaugeDialSize'));
        if (angular.isDefined(v) && validKey) {
          var newkey = k.substring(5);
          this[newkey.charAt(0).toLowerCase() + newkey.slice(1)] = v;
        }
      }, this.options);
    };
    this.$onChanges = function() {
      if (this.epochObj) {
        if (this.chartStream || this.gaugeStream) {
          if (this.chartStream) { this.epochObj.push(this.chartStream); }
          if (this.gaugeStream) { this.epochObj.update(this.gaugeStream); }
        } else {
          this.epochObj.update(this.chartData);
        }
      }
    };
    this.$postLink = function() {
      this.filterOptions();
      this.renderEpoch();
    };
  };

  var baseComponent = {
    controller: EpochController,
    bindings: allOptions,
    template: '<div class="epoch"></div>'
  };

  EpochController.$inject = ['$scope', '$element'];

  angular.module('ng.epoch', [])
    .component('epochArea', baseComponent)
    .component('epochLiveArea', baseComponent)
    .component('epochBar', baseComponent)
    .component('epochLiveBar', baseComponent)
    .component('epochLine', baseComponent)
    .component('epochLiveLine', baseComponent)
    .component('epochPie', baseComponent)
    .component('epochScatter', baseComponent)
    .component('epochGauge', baseComponent)
    .component('epochHeatmap', baseComponent);
})(angular);
