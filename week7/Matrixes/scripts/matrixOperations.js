define(["matrix"], function(Matrix){
  function createFromArray(data) {
    var result = new Matrix(data.length, data[0].length)
    for (var i = 0; i < result.getN(); i++){
      for (var j = 0; j < result.getM(); j++){
        result.setAt(i, j, data[i][j]);
      }
    }
    return result;
  };

  function transpose(M) {
    var Mt = new Matrix(M.getM(), M.getN());
    for (var j = 0; j < M.getM(); j++) {
      for (var i = 0; i < M.getN(); i++) {
        Mt.setAt(j, i, M.getAt(i, j));
      }
    }
    return Mt;
  };

  function sum(M1, M2) {
    var result = new Matrix(M1.getN(), M2.getM());
    for (var i = 0; i < result.getN(); i++) {
      for (var j = 0; j < result.getM(); j++) {
        result.setAt(i, j, M1.getData(i, j) + M2.getData(i, j));
      }
    }
    return result;
  };

  function scalarMult(scalar, M) {
    var result = new Matrix(M.getN(), M.getM());
    for (var i = 0; i < result.getN(); i++) {
      for (var j = 0; j < result.getM(); j++) {
        result.setAt(i, j, M.getAt(i, j) * scalar);
      }
    }
    return result;
  };

  function multiply(M1, M2) {
    function makeElement(row, column) {
      var element = 0;
      for(var i = 0; i < row.length; i++){
        element = element + row[i]*column[i]
      }
      return element;
    };
    var result = new Matrix(M1.getN(), M2.getM());
    if (M1.getM() === M2.getN()){
      for (var i = 0; i < result.getN(); i++){
        for (var j = 0; j < result.getM(); j++){
          result.setAt(i, j, makeElement(M1.getRow(i), M2.getCol(j)));
        }
      }
    }
    return result;
  };

  return {
    createFromArray: createFromArray,
    transpose: transpose,
    sum: sum,
    scalarMult: scalarMult,
    multiply: multiply
  };
});
