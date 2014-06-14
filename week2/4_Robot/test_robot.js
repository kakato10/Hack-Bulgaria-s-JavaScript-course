'use strict';
var Point = require('./point_in_the_sky').Point;
var Robot = require('./robot').Robot;

exports.testMove = function(test) {
  var r1 = Robot(Point(3,3));
  r1.moveRight(1);
  r1.moveLeft(2);
  r1.moveUp(1);
  r1.moveDown(2);
  test.equals(true, Point(2,2).equals(r1.getPos()));
  test.throws(function() {r1.moveLeft(-1);});
  test.throws(function() {r1.moveLeft('lqlq');});
  test.done();
}

