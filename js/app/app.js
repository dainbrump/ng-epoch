'use strict';

angular.module('Configuration',[]).config(['$provide','$locationProvider','$httpProvider',
  function ($provide, $locationProvider, $httpProvider) {
    $provide.constant('config', {
      'version': 0.1,
    });
    $locationProvider.html5Mode(true);
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }
]);

var nge = angular.module('ngEpochSite',[
  'ui.bootstrap','ui.router','ui-extras','ng.epoch','Configuration','angular-carousel'
]);

nge.config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('/', {
        url: '/',
        controller:'HomeCtrl',
        templateUrl:'/ng-epoch/js/app/views/home.html'
      })
      .state('get-started', {
        url: '/get-started',
        controller:'GetStartedCtrl',
        templateUrl:'/ng-epoch/js/app/views/get-started.html'
      })
      .state('examples', {
        url: '/examples',
        controller:'ExamplesCtrl',
        templateUrl:'/ng-epoch/js/app/views/examples.html'
      })
      .state('options', {
        url: '/options',
        controller:'OptionsCtrl',
        templateUrl:'/ng-epoch/js/app/views/options.html'
      });
  }
]);

nge.controller('PageCtrl', ['$scope', 'config',
  function ($scope, config) {
    $scope.page = {
      title: 'NG-Epoch'
    };

    $scope.navbar = {
      collapse: true,
      menu: [
        {'label': 'Home',        'id': 'home',       'href': '/'},
        {'label': 'Get Started', 'id': 'getstarted', 'href': 'get-started'},
        {'label': 'Examples',    'id': 'examples',   'href': 'examples'},
        {'label': 'Options',     'id': 'options',    'href': 'options'}
      ]
    };
  }
]);

/*
var liveAreaData = new RealTimeData(4);
var liveBarData = new RealTimeData(3);
var liveLineData = new RealTimeData(2);
var liveHeatmap = new HeatmapData(1);
var liveGaugeData = new GaugeData();

aeTest.controller('chartController', ['$scope', '$timeout',
  function ($scope, $timeout) {
    // Static charts and graphs
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
]);*/
