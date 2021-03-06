'use strict';

var countBy = function(f, arr){
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
      }).length;
    }
  });
  return result;
};
exports.countBy = countBy;
