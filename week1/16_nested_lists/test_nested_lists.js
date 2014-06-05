'use strict';

var ul = require('./nested_lists').ul;
var ol = require('./nested_lists').ol;


exports.testol = function(test) {
  var result = '<ol><li>Item 1</li><li>Item 2<ol><li>Level 2 of Item 2</li><li>Another level 2</li></ol></li></ol>';
  var items = [{ 'label' : 'Item 1'},
             { 'label' : 'Item 2', 'children' : [
                {
                    'label' : 'Level 2 of Item 2'
                },
                {
                    'label' : 'Another level 2'
                }
             ]}];

  test.equal (result, ol(items));
  test.done();
};

exports.testul = function(test) {
  var result = '<ul><li>Item 1</li><li>Item 2<ul><li>Level 2 of Item 2</li><li>Another level 2</li></ul></li></ul>';
  var items = [{ 'label' : 'Item 1'},
             { 'label' : 'Item 2', 'children' : [
                {
                    'label' : 'Level 2 of Item 2'
                },
                {
                    'label' : 'Another level 2'
                }
             ]}];

  test.equal (result, ul(items));
  test.done();
};


// exports.testul = function(test) {
//   var result = '<ul><li>Item 1</li><li>Item 2</li></ul>';
//   var items = [{ 'label' : 'Item 1'}, { 'label' : 'Item 2'}];
//   test.equal (result, ul(items));
//   test.done();
// };
