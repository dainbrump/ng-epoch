'use strict';

/**
 * All the methods in this file are direct copies of the functions used to
 * showcase the examples on http://fastly.github.io/epoch. For simplicity and
 * consistency sake, I have borrowed them and transformed them into an Angular
 * service. All credit for the original methods belongs to Ryan Sandor Richards,
 * the author of the Epoch plugin. See: https://github.com/rsandor
 */

nge.service('DataService', function() {
  this.generateAreaData = function () {
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
  };
  this.generateBarData = function () {
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
  };
  this.generateLineData = function () {
    var data = [
        {label: 'Layer 1', values: []},
        {label: 'Layer 2', values: []},
        {label: 'Layer 3', values: []}
    ];
    for (var i = 0; i < 256; i++) {
        var x = 40 * (i / 256) - 20;
        data[0].values.push({ x: x, y: Math.sin(x) * (x / 4) });
        data[1].values.push({ x: x, y: Math.cos(x) * (x / Math.PI) });
        data[2].values.push({ x: x, y: Math.sin(x) * (x / 2) });
    }
    return data;
  };
  this.generateScatterData = function () {
    var data = [
      { label: 'A', values: [] },
      { label: 'B', values: [] },
      { label: 'C', values: [] }
    ];
    for (var i = 0; i < 64; i++) {
      for (var j = 0; j < data.length; j++) {
        data[j].values.push({ x: (Math.random() * 1000), y: (Math.random() * 200) });
      }
    }
    return data;
  };
  this.generateBubbleData = function () {
    var data = [{label:'A',values:[]},{label:'B',values:[]}];
    for (var i = 0; i < 36; i++) {
      for (var j = 0; j < data.length; j++) {
        data[j].values.push({ x: (Math.random() * 1000), y: (Math.random() * 200), r: Math.random()*15 + 1 });
      }
    }
    return data;
  };
  this.generatePieData = function (slices) {
    var max = 90;
    var data = [];
    for (var i = slices; i > 0; i--) {
      var value = {};
      if (i > 1) {
        var perc = Math.floor(Math.random() * (max - 10)) + 10;
        max = max - perc;
        value = {label:perc+'%',value:perc};
      } else {
        value = {label:10+'%',value:10};
      }
      data.push(value);
    }
    return data;
  };
  this.RealTimeData = function (l) {
    var rtData = function(layers) {
      this.layers = layers;
      this.timestamp = ((new Date()).getTime() / 1000)|0;
    };
    rtData.prototype.rand = function() {
      return parseInt((Math.random() * 100) + 50, 10);
    };
    rtData.prototype.history = function(entries) {
      if (typeof(entries) != 'number' || !entries) {
        entries = 60;
      }
      var history = [];
      for (var k = 0; k < this.layers; k++) {
        history.push({ values: [] });
      }
      for (var i = 0; i < entries; i++) {
        for (var j = 0; j < this.layers; j++) {
          history[j].values.push({time: this.timestamp, y: this.rand()});
        }
        this.timestamp++;
      }
      return history;
    };
    rtData.prototype.next = function() {
      var entry = [];
      for (var i = 0; i < this.layers; i++) {
        entry.push({ time: this.timestamp, y: this.rand() });
      }
      this.timestamp++;
      return entry;
    };
    return new rtData(l);
  };
  this.GaugeData = function() {
    var gData = function () {};
    gData.prototype.next = function() {
      return Math.random();
    };
    return new gData();
  };
  this.HeatmapData = function(l) {
    var hmData = function (layers) {
      this.layers = layers;
      this.timestamp = ((new Date()).getTime() / 1000)|0;
    };
    hmData.prototype.normal = function() {
      var U = Math.random(),
          V = Math.random();
      return Math.sqrt(-2*Math.log(U)) * Math.cos(2*Math.PI*V);
    };
    hmData.prototype.rand = function() {
      var histogram = {};
      for (var i = 0; i < 1000; i ++) {
        var r = parseInt(this.normal() * 12.5 + 50);
        if (!histogram[r]) {
          histogram[r] = 1;
        }
        else {
          histogram[r]++;
        }
      }
      return histogram;
    };
    hmData.prototype.history = function(entries) {
      if (typeof(entries) != 'number' || !entries) {
        entries = 60;
      }
      var history = [];
      for (var k = 0; k < this.layers; k++) {
        history.push({ values: [] });
      }
      for (var i = 0; i < entries; i++) {
        for (var j = 0; j < this.layers; j++) {
          history[j].values.push({time: this.timestamp, histogram: this.rand()});
        }
        this.timestamp++;
      }
      return history;
    };
    hmData.prototype.next = function() {
      var entry = [];
      for (var i = 0; i < this.layers; i++) {
        entry.push({ time: this.timestamp, histogram: this.rand() });
      }
      this.timestamp++;
      return entry;
    };
    return new hmData(l);
  };
});
