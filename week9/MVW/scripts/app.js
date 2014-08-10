require.config({
  paths: {
    "jquery": "../bower_components/jquery/dist/jquery",
    "underscore": "../bower_components/lodash/dist/lodash",
    "backbone": "../bower_components/backbone/backbone",
    "handlebars": "../bower_components/handlebars/handlebars",
    "bootstrap": "../bower_components/bootstrap/dist/js/bootstrap",
  },
  shim: {
    "handlebars": {
      exports: "Handlebars"
    },
    "bootstrap": {
      "deps": ["jquery"]
    }
  }
});

require(["jquery", "underscore", "backbone", "handlebars", "user", "userFieldView"], function($, _, Backbone, Handlebars, User, UserField){
  $(document).ready(function(){
    var user = new User();
    var userField = new UserField({
      el: "#userField",
      model: user
    });
    userField.render();
  });
});
