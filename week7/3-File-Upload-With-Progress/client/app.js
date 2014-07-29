require.config({
  paths: {
    "Q": "bower_components/q/q",
    "jquery": "bower_components/jquery/dist/jquery",
  }
});
require(["Q", "jquery"], function(Q, $){
  $(document).ready(function(){
    console.log("connected");
    var
      doc = document.documentElement;
    doc.ondragover = function () { this.className = 'hover'; return false; };
    doc.ondragend = function () { this.className = ''; return false; };
    doc.ondrop = function (event) {
      console.log("element dropped");
      event.preventDefault && event.preventDefault();
      this.className = '';

      // now do something with:
      var files = event.dataTransfer.files;
      var formData = new FormData();
      for (var i = 0; i < files.length; i++) {
        formData.append('filedata', files[i]);
      }
      // now post a new XHR request
      Q.fcall(function(){
        var xhr = new XMLHttpRequest();
        var defered = Q.defer();
        xhr.open('POST', 'http://localhost:3000/fileUpload');
        xhr.onload = function () {
          if (xhr.status === 200) {
            console.log('all done: ' + xhr.status);
            defered.resolve();
          } else {
            console.log('Something went terribly wrong...');
          }
          progress.value = progress.innerHTML = 100;
        };
        xhr.upload.onprogress = function (event) {
          if (event.lengthComputable) {
            var complete = (event.loaded / event.total * 100 | 0);
            progress.value = progress.innerHTML = complete;
          }
        };
        xhr.send(formData);

        return defered.promise
      }).then(function(result){
        console.log("File Upladed!!!")
      }).done()
    };
  });
});
