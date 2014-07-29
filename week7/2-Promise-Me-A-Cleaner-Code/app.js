require.config({
  paths: {
    "Q": "bower_components/q/q"
  }
});

require(["Q"], function(Q) {

  function first() {
    var defered = Q.defer();
    setTimeout(function(){
      defered.resolve();
      console.log("called first!")
    }, 1000);
    return defered.promise;
  };

  function second(arg) {
    var defered = Q.defer();
    setTimeout(function(){
      defered.resolve();
      console.log("called second!");
    }, 1000);
    return defered.promise;
  };

  function third(arg) {
    var defered = Q.defer();
    defered.resolve();
    console.log("I should do the job after first and second");
    return defered.promise;
  }

  Q.fcall(first)
    .then(second)
    .then(third)
    .then(function(){
      console.log("Everything has been executed!");
    })
    .done();
});
