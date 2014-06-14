'use strict';

var Pair = function(left, right) {
  if(!(this instanceof Pair)) {
    return new Pair(left, right);
  }
  this.left = left;
  this.right = right;
};

Pair.prototype.equals = function(pair) {
  if(!(pair instanceof Pair)) {
     throw new TypeError("ERROR!!");
  }
  return this.left === pair.left && this.right === pair.right;
};

Pair.prototype.toString = function() {
  return '(' + this.left + ', ' + this.right + ')';
};

Pair.prototype.toList = function() {
  return [this.left, this.right];
};

Pair.prototype.combine = function(f) {
  return f(this.left, this.right);
};


exports.Pair = Pair;

