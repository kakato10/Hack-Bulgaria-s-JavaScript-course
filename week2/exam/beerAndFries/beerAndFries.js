'use strict';

var beerAndFries = function(menu) {
  var
  menu.forEach (function(item) {
    if (item.type === 'beer') {
      beer_scores.push(item.score);
    } else {
     fries_scores.push(item.score);
    }
  });
  console.log(beer_scores);
  console.log(fries_scores);
  beer_scores = beer_scores.sort(sortArray);
  fries_scores = fries_scores.sort(sortArray);
  var couples = [];
  couples = zip([beer_scores, fries_scores]);
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


