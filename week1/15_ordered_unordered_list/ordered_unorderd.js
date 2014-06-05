'use strict';

var ol = function(item) {
  var result = '<ol>';
  item.forEach(function(a) {
    result = result + '<li>' + a[Object.keys(a)[0]] + '</li>';
  });
  return result + '</ol>';
};

var ul = function(item) {
  var result = '<ul>';
  item.forEach(function(a) {
    result = result + '<li>' + a[Object.keys(a)[0]] + '</li>';
  });
  return result + '</ul>';
};

exports.ul = ul;
exports.ol = ol;

