'use strict';
define(function(){
  var Matrix = function(n, m){
    var array = [];
    var count = 0;
    for (var i = 0; i < n; i++){
      var elements = []
      for (var j = 0; j < m; j++){
        elements.push(0);
      }
      array.push(elements)
    }
    this.getN = function(){
      return n;
    };
    this.getM = function(){
      return m;
    };

    this.getRow = function(index){
      return array[index];
    };

    this.getCol = function(index){
      var column = [];
      array.forEach(function(row){
        column.push(row[index]);
      });
      return column;
    };

    this.setRow = function(index, row){
      if (index <= n){
        array[index] = row;
        n = array.length;
      }
    };

    this.setCol = function(index, column){
      if (index <= m){
        array.forEach(function(row, rowIndex){
          row[index] = column[rowIndex];
        });
        if(index === m){
          m = m + 1;
        }
      }
    };

    this.getAt = function(i, j){
      return array[i][j];
    };

    this.setAt = function(i, j, value){
      if(i < n && j < m && i >= 0 && j >= 0){
        array[i][j] = value;
      }
    };
    this.getData = function(){
      return array;
    };
    this.toString = function(){
      console.log(array.map(function(elements){
        return elements.join(" ") + "\n";
      }).join(""));
      return array.map(function(elements){
        return elements.join(" ") + "\n";
      }).join("");
    };
  };
  return Matrix;
});
