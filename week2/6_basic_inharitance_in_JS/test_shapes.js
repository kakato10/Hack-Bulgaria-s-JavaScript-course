'use strict';

 var Shape = require('./shapes').Shape;
 var Rectangle = require('./shapes').Rectangle;
 var Triangle = require('./shapes').Triangle;
 var Circle = require('./shapes').Circle;

exports.testRectangle = function(test) {
  var rectangle =  new Rectangle(4, 5);
  test.equal('Rectangle', rectangle.getType());
  test.equal(20, rectangle.area());
  test.done();
};

exports.testCircle = function(test) {
  var circle =  new Circle(5);
  test.equal('Circle', circle.getType());
  test.equal(78.5, circle.area());
  test.done();
};

exports.testTriangle = function(test) {
  var triangle =  new Triangle(4, 5);
  test.equal('Triangle', triangle.getType());
  test.equal(10, triangle.area());
  test.done();
};
