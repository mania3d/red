var http = require('http');
var express = require("express");
var RED = require("node-red");
var config = require("./config");

var app = express();

var server = http.createServer(app);

RED.init(server,config.nodered);

// Serve the editor UI from /red
app.use(config.nodered.httpAdminRoot,RED.httpAdmin);

// Serve the http nodes UI from /api
app.use(config.nodered.httpNodeRoot,RED.httpNode);

server.listen(config.app.port, config.app.host, function() {
    console.log('Listening on port ' + config.app.port);
});

RED.start();