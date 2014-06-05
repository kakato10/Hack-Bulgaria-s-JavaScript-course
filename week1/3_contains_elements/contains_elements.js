'use strict';

var containsAll = function(elements, arr) {
  return elements.every(function(a){
    return arr.some(function(b){
      return a === b;
    });
  });
};

exports.containsAll = containsAll;
