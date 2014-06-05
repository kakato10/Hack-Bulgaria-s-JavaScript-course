'use strict';

var ul = require('./ordered_unorderd').ul;
var ol = require('./ordered_unorderd').ol;


exports.testol = function(test) {
  var result = '<ol><li>Item 1</li><li>Item 2</li></ol>';
  var items = [{ 'label' : 'Item 1'}, { 'label' : 'Item 2'}];
  test.equal (result, ol(items));
  test.done();
};

exports.testul = function(test) {
  var result = '<ul><li>Item 1</li><li>Item 2</li></ul>';
  var items = [{ 'label' : 'Item 1'}, { 'label' : 'Item 2'}];
  test.equal (result, ul(items));
  test.done();
};
