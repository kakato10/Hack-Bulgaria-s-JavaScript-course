$(document).ready(function(){
  var namesDb = {};
  var getDataBase = function(callback){
    $.ajax({
      url: "http://localhost:8080/names",
      type: "GET",
      contentType: "application/json",
    }).done(function(data){
      callback(data);
    });
  };

  var updateDatabase = function(newName, callback) {
    $.ajax({
      url: "http://localhost:8080/name",
      type: "POST",
      contentType: "application/json",
      dataType: "json",
      data: JSON.stringify(newName)
    }).done(function(data){
      callback(data);
    });
  };

  var loadDatabase = function(data){
    data.forEach (function(item){
      namesDb[item.nameId] = item;
    });
    fillHtml(data);
  };

  var generateNameHtml = function(name){
    var nameRowHtml = $("#name-row").html();
    var nameRowSource = Handlebars.compile(nameRowHtml);
    return nameRowSource(name);
  }

  var fillHtml = function(data) {
    var allNames = "";
    data.forEach(function(name){
      allNames = allNames + generateNameHtml(name);
    });
    $("#name-container").append(allNames);
  };

  $(document).on("input",".name-input",function(){
    $(this).parent().children(".update").removeAttr("disabled");
  });

  $(document).on("click", ".update", function(){
    var newName = $(this).parent().children(".name-input").val();
    var id = $(this).parent().attr("id");
    updateDatabase({
      nameId : id,
      name : newName
    }, function(data){
      $("#name-container").empty();
      getDataBase(loadDatabase);
    });
  });
  getDataBase(loadDatabase);
});
