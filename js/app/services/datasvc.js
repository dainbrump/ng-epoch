'use strict';

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
});
