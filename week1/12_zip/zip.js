'use strict';

var zip = function () {
 var result =[];
 var x = arguments;
 var arrays = [];
 Object.keys(x).forEach(function(a){
  arrays.push((x[a]));});
 arrays.forEach(function (array) {
  array.forEach(function (el) {
    if (result.length < index + 1) {
      result.push([el]);
    } else {
      result[array.index].push(el);
    }
  });
 });
 return result;
};


exports.zip = zip;
