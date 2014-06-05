'use strict';

var string_format = require('./string_format').string_format;

exports.teststring_format = function(test) {
  var string ='(name) is awesome at (age)';
  test.equal('Me is awesome at 12', string_format(string, {'name' : 'Me',
  'age' : '12'}));
  test.done();
};
