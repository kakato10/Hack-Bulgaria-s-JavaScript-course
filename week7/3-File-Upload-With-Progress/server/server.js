var
  express = require("express"),
  Q = require("q"),
  app = express(),
  bodyParser = require("body-parser"),
  path = require("path"),
  formidable = require("formidable"),
  fs = require("fs-extra"),
  UPLOAD_DIR = "./tmp";

app.get("/", function(req, res) {
  res.send("Make a post to /fileUpload to upload file");
  res.end();
});

app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", ["X-Requested-With", "Content-Type", "Access-Control-Allow-Methods"]);
  next();
});

app.post("/fileUpload", function(req, res) {
  var form = new formidable.IncomingForm();
      //Formidable uploads to operating systems tmp dir by default
      form.uploadDir = UPLOAD_DIR;       //set upload directory
      form.keepExtensions = true;     //keep file extension

  form.parse(req, function(err, fields, files) {
    console.log(fields)
    console.log(files);

    res.json({
      status: "UPLOAD_SUCCESSFUL"
    });
    function renameFile(){
      var defered = Q.defer();
      fs.rename(files.filedata.path, UPLOAD_DIR + "/" + files.filedata.name, function(err) {
        if (err) {
          throw err;
        }
        defered.resolve();
        console.log('renamed');
      });
      return defered.promise;
    };

    function removeFile(result){
      var defered = Q.defer();
      console.log("in here");
      fs.remove(files.filedata.path, function(err){
        if (err) {
          throw err;
        }
        console.log("File removed");
        defered.resolve();
      });
      return defered.promise;
    };
    //Formidable changes the name of the uploaded file
    //Rename the file to its original name
    Q.fcall(renameFile)
    .then(removeFile)
    .done(function(){
      res.end();
    });
  });
});

app.listen(3000);
