'use strict';

var wordsHistogram = require('./histogram').wordsHistogram;

exports.testwordsHistogram = function(test) {
  var result = {
    'a' : 3,
    'function' : 3,
    'is' : 1,
    'with' : 1,
    'very' : 1,
    'functional' : 1
},
  str = 'A function is a function with a very functional function!';
  test.deepEqual(result, wordsHistogram(str));
  test.done();
};
