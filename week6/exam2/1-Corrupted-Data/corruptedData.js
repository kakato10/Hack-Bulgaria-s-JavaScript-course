"use strict";
var checkData = function(info){
  var result = [];
  info.forEach(function(item, index1){
    var matches = info.slice(index1 + 1, info.length).filter(function(anotherItem){
      return item.fields.date === anotherItem.fields.date && item.fields.student === anotherItem.fields.student;
    });
    if(matches.length !== 0){
      result.push(matches);
    }
  });
  return result;
};

exports.checkData = checkData;
