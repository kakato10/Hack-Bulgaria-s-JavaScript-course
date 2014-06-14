'use strict';

function Shape(type) {
  this.getType = function() {
    return type;
  };
}

Shape.prototype.area = function() {
  throw new Error('Cannot call area of Shape. Use subclasses!');
};

var Rectangle = function(a, b) {
  Shape.call(this, 'Rectangle');
  this.getFirstSide = function() {
    return a;
  };
  this.getSecondSide = function() {
    return b;
  };
};
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.area = function() {
  return this.getFirstSide() * this.getSecondSide();
};


var Circle = function(radius) {
  Shape.call(this, 'Circle');
  this.getRadius = function() {
    return radius;
  };
};
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.area = function() {
  return this.getRadius() * this.getRadius() * 3.14;
};

var Triangle = function(a,h) {
  Shape.call(this, 'Triangle');
  this.getHeight = function() {
    return h;
  };
  this.getSide = function() {
    return a;
  };

};
Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;
Triangle.prototype.area = function() {
  return this.getHeight() * this.getSide() / 2;
};

exports.Shape = Shape;
exports.Rectangle = Rectangle;
exports.Triangle = Triangle;
exports.Circle = Circle;
