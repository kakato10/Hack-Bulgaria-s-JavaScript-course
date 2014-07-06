'use strict';

var ol = function(items) {
  var result = '<ol>';
  items.forEach(function(item) {
    if ("children" in item) {
      result = result + "<li>"+ item.label + ol(item.children) + "</li>";
    } else {
    result = result + '<li>' + item.label + '</li>';
    }
  });
  return result + '</ol>';
};

var ul = function(items) {
  var result = '<ul>';
  items.forEach(function(item) {
    if ("children" in item){
      result = result + "<li>" + item.label +ul(item.children) + "</li>";
    } else {
      result = result + '<li>' + item.label + '</li>';
    }
  });
  return result + '</ul>';
};

exports.ul = ul;
exports.ol = ol;

