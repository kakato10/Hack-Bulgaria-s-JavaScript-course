'use strict';

var groupBy = function(f, arr){
  var counter = 0,
  keys =[],
  result = {};
  arr.forEach(function(a){
    keys[counter] = f(a);
    counter = counter + 1;
  });
  keys.forEach(function(key) {
    if(!(key in result)){
      result[key] = arr.filter(function(a){
        return f(a) === key;
      });
    }
  });
  return result;
};
exports.groupBy = groupBy;
