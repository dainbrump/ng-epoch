'use strict';

var uiExtras = angular.module('ui-extras', []);

var basePanel = {
  template: '<div ng-transclude></div>',
  restrict: 'E',
  replace: true,
  transclude: true
};

uiExtras.directive('panel', function() {
  var pScope = { title: '@', type: '@'};
  var pLink = function (scope, el) {
    el.addClass('panel');
    el.addClass('panel-' + ((scope.type) ? scope.type : 'default'));
    var setTitle = function (title) {
      if (!angular.element(el.children()[0]).hasClass('panel-heading')) {
        el.prepend(angular.element('<div class="panel-heading"></div>'));
      }
      if (!angular.element(el.children()[0]).children()[0]) {
        angular.element(el.children()[0]).prepend('<h3 class="panel-title"></h3>');
      }
      angular.element(angular.element(el.children()[0]).children()[0]).text(title);
    };
    if (scope.title) {
      setTitle(scope.title);
    }
    scope.$watch('title', function () {
      if (scope.title) {
        setTitle(scope.title);
      }
    });
  };
  return angular.extend(angular.copy(basePanel), {scope: pScope, link: pLink});
});

uiExtras.directive('panelTitle', function() {
  var ptBase = angular.copy(basePanel);
  ptBase.template = '<div class="panel-heading"><h3 class="panel-title" ng-transclude></h3></div>';
  return angular.extend(ptBase, {link: function (scope, el, att) {}});
});

uiExtras.directive('panelBody', function() {
  var pbLink = function (scope, el, att) { el.addClass('panel-body'); };
  return angular.extend(angular.copy(basePanel), {link: pbLink});
});

uiExtras.directive('panelFooter', function() {
  var pfLink = function (scope, el, att) { el.addClass('panel-footer'); };
  return angular.extend(angular.copy(basePanel), {link: pfLink});
});

var baseLoader = {
  template: '',
  restrict: 'E',
  replace: true,
  scope: { message: '@', messageClass: '@' },
  link: function (scope, element, attrs) {
    if (scope.message) {
      var p = element.prepend('<p>'+ scope.message+'</p>');
      if (scope.messageClass) { p.addClass(scope.messageClass) }
    }
  }
};

uiExtras.directive('loadingSpinner', function() {
  var lSpinner = angular.copy(baseLoader);
  lSpinner.template = '<div style="text-align: center;"><div class="spinner"><div class="dot1"></div><div class="dot2"></div></div></div>';
  return lSpinner;
});

uiExtras.directive('loadingBounce', function() {
  var lBounce = angular.copy(baseLoader);
  lBounce.template = '<div style="text-align: center;"><div class="bounce"><div class="double-bounce1"></div><div class="double-bounce2"></div></div></div>';
  return lBounce;
});

uiExtras.directive('loadingPulsate', function() {
  var lPulsate = angular.copy(baseLoader);
  lPulsate.template = '<div style="text-align: center;"><div class="pulsate"></div></div>';
  return lPulsate;
});