'use strict';

var sum_min_max = function (n) {
  n = n.sort(function(a,b) {return a - b;});
  return n[0] + n[n.length - 1];
};

exports.sum_min_max = sum_min_max;
