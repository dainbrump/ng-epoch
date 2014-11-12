'use strict';

nge.service('OptionsObject', function() {
  var extendAttrs = function (src, more) {
    var a = angular.copy(src);
    angular.forEach(more, function(v) { this.push(v); }, a);
    return a;
  };
  var commonStatic = ['chart-axes','chart-ticks','chart-tick-formats','chart-domain','chart-range','chart-margins'];
  var commonRealtime = [];
  var options = {
    atts: {
      'chart-axes': {
        'short': 'An array of axes to display. Options are: top, bottom, left, right',
        'long': "Example: ['top', 'right', 'bottom', 'left']"
      },
      'chart-ticks': {
        'short': 'An object containing the number of ticks to display on each axis.',
        'long': "Example: { top: 10, right: 5, bottom: 20, left: 5 }"
      },
      'chart-tick-formats': {
        'short': 'The formatting function to use when displaying tick labels.',
        'long': "Example: { bottom: function(d) { return '$' + d.toFixed(2); } }"
      },
      'chart-domain': {
        'short': 'An array specifying an explicit domain for the chart.',
        'long': 'Example: [0, 2*Math.PI]'
      },
      'chart-range': {
        'short': 'An array specifying an explicit range for the chart.',
        'long': 'Example: [-1, 2]'
      },
      'chart-margins': {
        'short': 'Explicit margin overrides for the chart.',
        'long': 'Example: { top: 50, right: 30, bottom: 100, left: 40 }'
      },
      'chart-margin': {
        'short': 'Surrounds the chart with a defined pixel margin.',
        'long': ''
      },
      'chart-inner': {
        'short': 'Inner radius for the pie chart (for making Donut charts).',
        'long': ''
      },
      'chart-width': {
        'short': 'This is the width of the chart in pixels.',
        'long': ''
      },
      'chart-height': {
        'short': 'This is the height of the chart in pixels.',
        'long': ''
      },
      'chart-data': {
        'short': 'This is the data to render. With realtime charts, this is the initial data.',
        'long': ''
      },
      'chart-class': {
        'short': '',
        'long': ''
      },
      'chart-orientation': {
        'short': 'Sets the orientation for the chart. Options are: vertical (default) or horizontal.',
        'long': ''
      },
      'chart-padding': {
        'short': 'Sets the padding (in percent) for the space between bars or bar groups.',
        'long': ''
      },
      'chart-outer-padding': {
        'short': 'Sets the padding (in percent) for the space outside bars or bar groups.',
        'long': ''
      },
      'chart-radius': {
        'short': '',
        'long': ''
      },
      'chart-fps': {
        'short': '',
        'long': ''
      },
      'chart-format': {
        'short': '',
        'long': ''
      },
      'chart-window-size': {
        'short': '',
        'long': ''
      },
      'chart-history-size': {
        'short': '',
        'long': ''
      },
      'chart-queue-size': {
        'short': '',
        'long': ''
      },
      'chart-pixel-ratio': {
        'short': '',
        'long': ''
      },
      'chart-buckets': {
        'short': '',
        'long': ''
      },
      'chart-bucket-range': {
        'short': '',
        'long': ''
      },
      'chart-bucket-padding': {
        'short': '',
        'long': ''
      },
      'chart-opacity': {
        'short': '',
        'long': ''
      },
      'chart-paint-zero-values': {
        'short': '',
        'long': ''
      },
      'chart-stream': {
        'short': '',
        'long': ''
      },
      'gauge-value': {
        'short': '',
        'long': ''
      },
      'gauge-dial-size': {
        'short': '',
        'long': ''
      },
      'gauge-format': {
        'short': '',
        'long': ''
      },
      'gauge-stream': {
        'short': '',
        'long': ''
      }
    },
    epochArea: {
      tag: '<epoch-area></epoch-area>',
      requiredAtts: ['chart-height','chart-data'],
      optionalAtts: extendAttrs(commonStatic, ['chart-width'])
    },
    epochBar: {
      tag: '<epoch-bar></epoch-bar>',
      requiredAtts: ['chart-height','chart-data'],
      optionalAtts: extendAttrs(commonStatic, ['chart-width','chart-orientation','chart-padding','chart-outer-padding'])
    },
    epochLine: {
      tag: '<epoch-line></epoch-line>',
      requiredAtts: ['chart-height','chart-data'],
      optionalAtts: extendAttrs(commonStatic, ['chart-width'])
    },
    epochPie: {
      tag: '<epoch-pie></epoch-pie>',
      requiredAtts: ['chart-width','chart-height','chart-data'],
      optionalAtts: ['chart-margin', 'chart-inner']
    },
    epochScatter: {
      tag: '<epoch-scatter></epoch-scatter>',
      requiredAtts: ['chart-height','chart-data'],
      optionalAtts: extendAttrs(commonStatic, ['chart-width', 'chart-radius'])
    },
    epochLiveArea: {
      tag: '<epoch-live-area></epoch-live-area>',
      requiredAtts: ['chart-height','chart-data'],
      optionalAtts: extendAttrs(commonStatic, extendAttrs(commonRealtime, ['chart-width', 'chart-radius']))
    },
    epochLiveBar: {
      tag: '<epoch-live-bar></epoch-live-bar>',
      requiredAtts: ['chart-height','chart-data'],
      optionalAtts: extendAttrs(commonStatic, extendAttrs(commonRealtime, ['chart-width', 'chart-radius']))
    },
    epochLiveLine: {
      tag: '<epoch-live-line></epoch-live-line>',
      requiredAtts: ['chart-height','chart-data'],
      optionalAtts: extendAttrs(commonStatic, extendAttrs(commonRealtime, ['chart-width', 'chart-radius']))
    },
    epochGauge: {
      tag: '<epoch-gauge></epoch-gauge>',
      requiredAtts: ['chart-height','chart-data'],
      optionalAtts: extendAttrs(commonStatic, extendAttrs(commonRealtime, ['chart-width', 'chart-radius']))
    },
    epochHeatmap: {
      tag: '<epoch-heatmap></epoch-heatmap>',
      requiredAtts: ['chart-height','chart-data'],
      optionalAtts: extendAttrs(commonStatic, extendAttrs(commonRealtime, ['chart-width', 'chart-radius']))
    }
  };
  return options;
});