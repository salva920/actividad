var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

var routes = require ("./routes/autos");
app.use("",routes);

var server = app.listen(3000, function() {
    var host = "127.0.0.1"
    var port = server.address().port
    console.log("servidor activo en http://%s:%s", host, port)
})

module.exports = app;