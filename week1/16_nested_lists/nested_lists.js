'use strict';

var ol = function(item) {
  var result = '<ol>';
  item.forEach(function(a) {
    if (Object.keys(a)[1] === 'children') {
      result = result + '<li>' + a[Object.keys(a)[0]] + '<ol>';
      a.children.forEach(function(b) {
        result = result + '<li>' + b[Object.keys(b)[0]] + '</li>';
      });
      result = result + '</ol>' + '</li>';
    } else {
      result = result + '<li>' + a[Object.keys(a)[0]] + '</li>';}

  });
  return result + '</ol>';
};

var ul = function(item) {
   var result = '<ul>';
  item.forEach(function(a) {
    if (Object.keys(a)[1] === 'children') {
      result = result + '<li>' + a[Object.keys(a)[0]] + '<ul>';
      a.children.forEach(function(b) {
        result = result + '<li>' + b[Object.keys(b)[0]] + '</li>';
      });
      result = result + '</ul>' + '</li>';
    } else {
      result = result + '<li>' + a[Object.keys(a)[0]] + '</li>';}

  });
  return result + '</ul>';
};

exports.ul = ul;
exports.ol = ol;
