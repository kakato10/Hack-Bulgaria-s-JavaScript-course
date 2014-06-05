'use strict';

var find = function(f, arr) {
  return arr.filter(f)[0];
};
exports.find = find;
