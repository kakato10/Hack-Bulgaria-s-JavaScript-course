define(["backbone", "jquery", "handlebars"], function(Backbone, $, Handlebars){
  var UserField = Backbone.View.extend({
    events: {
      "click .save": "saveName"
    },
    render: function(){
      var userFieldSource = $("#userFieldTemplate").html();
      this.$el.append(userFieldSource);
    },
    saveName: function () {
      this.model.set("username", $("#usernameInput").val());
      var
        greetingsSource = $("#greetings").html(),
        greetingsTemplate = Handlebars.compile(greetingsSource);
      console.log(this.model);
      this.$el.prepend(greetingsTemplate(this.model.attributes));
      $(".save").prop("disabled", true);
    }
  });
  return UserField;
});
