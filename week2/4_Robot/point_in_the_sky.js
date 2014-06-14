'use strict';

var Point = function(x, y) {
  if (!(this instanceof Point)) {
    return new Point(x, y);
  }
  this.getX = function()  {
    return x;
  };
  this.getY = function()  {
    return y;
  };
  this.xInc = function() {
    x = x + 1;
  };
  this.yInc = function() {
    y = y + 1;
  };
  this.xDec = function() {
    x = x - 1;
  };
  this.yDec = function() {
    y = y - 1;
  };
};

Point.prototype.equals = function(point) {
  if(!(point instanceof Point)) {
     throw new TypeError("ERROR!!");
  }
  return this.getX() === point.getX() && this.getY() === point.getY();

};

Point.prototype.toString = function() {
  return ['(',this.getX(),
    ', ', this.getY(), ')'].join('');
}


exports.Point = Point;
