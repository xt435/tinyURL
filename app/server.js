var express = require("express");
var app = express();
var restRouter = require('./routes/rest');
var redirectRouter = require('./routes/redirect');
var indexRouter = require("./routes/index");
var mongoose = require('mongoose');
var useragent = require('express-useragent');

mongoose.connect("mongodb://admin:admin@ds157469.mlab.com:57469/heroku_qljpmql9");

var port = process.env.PORT || 3000;

app.use("/public", express.static(__dirname + "/public"));
app.use("/node_modules", express.static(__dirname + "/node_modules"));

app.use(useragent.express());

app.use("/api/tinyUrl_V3", restRouter);

app.use("/", indexRouter);

app.use("/:shortUrl",redirectRouter);


// app.listen(3000, function(){
//    console.log("The tinyUrl Server Has Started!");
// });

app.listen(port, function() {
    console.log(`The tinyUrl Server is up on port ${port}`);
});
