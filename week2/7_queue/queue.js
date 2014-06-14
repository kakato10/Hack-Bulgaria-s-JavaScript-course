'use strict';
var counter = (function() {
  var count = 0;

  return function() {
    count = count + 1;
    return count;
  };
} () );

var queue = (function() {
  var _private = {
    values : []
  };
  var _public  = {
    push : function(element) {
      _private.values.push(element);
    },
    pop : function() {
      return _private.values.pop();
    },
    isEmpty : function() {
      return !_private.values.length
    }
  };
  return _public;
} () );

exports.queue = queue;
exports.counter = counter;
