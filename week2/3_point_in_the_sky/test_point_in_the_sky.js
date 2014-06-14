'use strict';

var Point = require('./point_in_the_sky').Point;

exports.testPointEquals = function(test) {
  var p1 = Point(1, 2);
  var p2 = Point(3, 4);
  test.equal(false, p1.equals(p2));
  p1 = Point(1, 2);
  test.equal(true, p1.equals(p1));
  test.throws(function() {p1.equals(1);});
  test.done();
};

exports.testPointToString = function(test) {
  var p1 = Point(1, 2);
  test.equal('(1, 2)', p1.toString());
  test.done();
};

exports.testChangeX = function(test) {
  var p1 = Point(1, 2);
  p1.xInc();
  p1.xDec();
  test.equal(1, p1.getX());
  test.done();
}

exports.testChangeY = function(test) {
  var p1 = Point(1, 2);
  p1.yInc();
  p1.yDec();
  test.equal(2, p1.getY());
  test.done();
}
