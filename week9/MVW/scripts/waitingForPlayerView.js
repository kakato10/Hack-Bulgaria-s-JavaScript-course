define(["backbone", "jquery"], function(Backbone, $){
  var WaitingView = Backbone.View.extend({
    render: function(){
      $(".inputs").empty();
    }
  })
});
