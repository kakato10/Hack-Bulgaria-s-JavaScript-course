'use strict';

var queue = require('./queue').queue;

exports.testQueue = function(test) {
  var testing_queue = Object.create(queue);
  testing_queue.push(5);
  testing_queue.push(10);
  testing_queue.push(12);
  test.equal(12, queue.pop());
  queue.pop();
  queue.pop();
  test.equal(true, queue.isEmpty());
  test.done();
};
