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
  'ui.bootstrap','ui.router','ui-extras','ng.epoch','Configuration','angular-carousel', 'ngSanitize'
]);

nge.config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('/', {
        url: '/', controller:'HomeCtrl', templateUrl:'js/app/views/home.html'
      })
      .state('get-started', {
        url: '/get-started', controller:'GetStartedCtrl', templateUrl:'js/app/views/get-started.html'
      })
      .state('examples', {
        url: '/examples', controller:'ExamplesCtrl', templateUrl:'js/app/views/examples.html'
      })
      .state('options', {
        url: '/options', controller:'OptionsCtrl', templateUrl:'js/app/views/options.html'
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
        {'label': 'Examples',    'id': 'examples',   'href': 'examples'}
      ]
    };
  }
]);
