require.config({
  paths: {
  "jquery": "../bower_components/jquery/dist/jquery",
  "handlebars": "../bower_components/handlebars/handlebars.min",
  "bootstrap": "../bower_components/bootstrap/dist/js/bootstrap.min"
  },
  shim: {
    "handlebars": {
      exports: "Handlebars"
    },
    "bootstrap": {
    "deps": ["jquery"]
  }

});

require(["matrixOperations", "matrix", "jquery", "handlebars", "bootstrap"], function(operations, Matrix,$, Handlebars) {
  var A = new Matrix(2, 3);
  $("body")
    .html("All went fine with jQuery loading!")
    .append("<br/>")
    .append(A.toString());
});
