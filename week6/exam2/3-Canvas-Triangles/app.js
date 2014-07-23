$(document).ready(function(){
  var saves = [];
  function loadSaves(){
    if(localStorage.trianglesApp !== undefined){
      saves = JSON.parse(localStorage.trianglesApp) ;
    }
  };

  loadSaves();

  function generateSavedBoardRow(save, index){
    var savedBoardSource = $("#savedBoard").html();
    var savedBoardTemplate = Handlebars.compile(savedBoardSource);
    save.index = index;
    return savedBoardTemplate(save);
  };

  function fillSavesDropDown(data){
    var allSaves = '';
    data.forEach(function(save, index){
      allSaves = allSaves + generateSavedBoardRow(save, index);
    });
    $("#savesDropdown").append(allSaves);
  };

  fillSavesDropDown(saves);

  function getFillColor(){
    return $("#colorInput").val();
  };

  var
    points = [],
    triangles = [],
    counter = 0,
    canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    canvasHeight = $("#canvas").height();
    canvasWidth= $("#canvas").width();;

  var Triangle = function(firstPoint, secondPoint, thirdPoint, color) {
    this.draw = function(){
      context.beginPath();
      context.moveTo(firstPoint.x, firstPoint.y);
      context.lineTo(secondPoint.x, secondPoint.y);
      context.lineTo(thirdPoint.x, thirdPoint.y);
      context.fillStyle = color;
      context.fill();
    };
    this.export = function(){
      return {
        firstPoint : {
          x: firstPoint.x,
          y: firstPoint.y
        },
        secondPoint : {
          x: secondPoint.x,
          y: secondPoint.y
        },
        thirdPoint : {
          x: thirdPoint.x,
          y: thirdPoint.y
        },
        color : color
      };
    };
  };

  function getPosition(event){
    var
      x = event.x,
      y = event.y;
/*понеже ползвам col-lg в html-a не видях как точно да намери стойността която трябва да
извадя от x без магически числа*/
    x = x - 600;
    y = y - canvas.offsetTop;
    points.push({
      x: x,
      y: y
    });
    if (points.length === 3) {
      triangles.push(new Triangle(points[0], points[1], points[2], getFillColor()));
      triangles[triangles.length - 1].draw();
      points = [];
    }
  };

  function loadSave(saveIndex){
    var savedTriangles = saves[saveIndex].triangles;
    savedTriangles.forEach(function(triangle){
      triangles.push(new Triangle(triangle.firstPoint, triangle.secondPoint, triangle.thirdPoint, triangle.color));
      triangles[triangles.length-1].draw();
    });
  };

  function saveCanvas(name){
    var save = {
      name: name,
      triangles: []
    };
    triangles.forEach(function(triangle){
      save.triangles.push(triangle.export())
    });
    saves.push(save);
    localStorage.trianglesApp = JSON.stringify(saves);
    $("#savesDropdown").append(generateSavedBoardRow(save, saves.length-1));
  };

  $("#save").on("click", function(){
    var name = prompt("Please enter name for your save.");
    saveCanvas(name);
  });

  $("#clearCanvas").on("click", function(){
    context.clearRect(0, 0, canvasHeight, canvasWidth);
    triangles = [];
  });

  $(document).on("click", ".save", function(){
    loadSave($(this).data("index"));
  });
  canvas.addEventListener("mousedown", getPosition, false);
});
