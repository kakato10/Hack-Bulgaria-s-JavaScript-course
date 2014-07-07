'use strict';

var beerAndFries = function(menu) {
  var beerScores = [];
  var friesScores = [];
  menu.forEach (function(item) {
    if (item.type === 'beer') {
      beerScores.push(item.score);
    } else {
     friesScores.push(item.score);
    }
  });
  beerScores = beerScores.sort(sortArray);
  friesScores = friesScores.sort(sortArray);
  var couples = [];
  couples = zip([beerScores, friesScores]);
  return couples.reduce(function(a, b) {
    return a + b[0] * b[1];
  }, 0);
};

var zip = function (arrays) {
    return arrays[0].map(function(_,i){
        return arrays.map(function(array){return array[i];});
    });
};

function sortArray(a,b) {
    return a - b;
}

exports.beerAndFries = beerAndFries;


