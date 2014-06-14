'use strict';

var Point = require('./point_in_the_sky').Point;

var Robot = function(point) {
  if(!(this instanceof Robot)){
    return new Robot(point);
  };
  this.getPos = function() {
    return point;
  };
};

Robot.prototype.moveLeft = function(amount) {
  if(!('number' === typeof(amount)) || amount < 0) {
    throw new TypeError('ERROR!!');
  }
  while (amount) {
    (this.getPos()).xDec();
    amount = amount - 1;
  }
};
Robot.prototype.moveRight = function(amount) {
  if(!('number' === typeof(amount)) || amount < 0) {
    throw new TypeError('ERROR!!');
  }
  while (amount) {
    (this.getPos()).xInc();
    amount = amount - 1;
  }
};

Robot.prototype.moveUp = function(amount) {
  if(!('number' === typeof(amount)) || amount < 0) {
    throw new TypeError('ERROR!!');
  }
  while (amount) {
    (this.getPos()).yInc();
    amount = amount - 1;
  }
};

Robot.prototype.moveDown = function(amount) {
  if(!('number' === typeof(amount)) || amount < 0) {
    throw new TypeError('ERROR!!');
  }
  while (amount) {
    (this.getPos()).yDec();
    amount = amount -1
  }
};


exports.Robot = Robot;
