$(document).ready(function(){
  var namesDb = {},
      server = "http://localhost:8080",
      $nameContainer = $("#name-container");

  var getDataBase = function(callback){
    $.ajax({
      url: server + "/names",
      type: "GET",
      contentType: "application/json",
    }).done(function(data){
      callback(data);
    });
  };

  var updateDatabase = function(newName, callback) {
    $.ajax({
      url: server + "/name",
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
    var
      nameRowHtml = $("#name-row").html(),
      nameRowSource = Handlebars.compile(nameRowHtml);
    return nameRowSource(name);
  }

  var fillHtml = function(data) {
    var allNames = "";
    data.forEach(function(name){
      allNames = allNames + generateNameHtml(name);
    });
    $nameContainer.append(allNames);
  };

  $(document).on("input",".name-input",function(){
    $(this).parent().children(".update").removeAttr("disabled");
  });

  $(document).on("click", ".update", function(){
    var
      newName = $(this).parent().children(".name-input").val(),
      id = $(this).parent().attr("id");
    updateDatabase({
      nameId : id,
      name : newName
    }, function(data){
      $nameContainer.empty();
      getDataBase(loadDatabase);
    });
  });
  getDataBase(loadDatabase);
});
