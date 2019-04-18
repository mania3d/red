var mosca = require('mosca');
var config = require("./config");

var start = function() {
    var server = new mosca.Server(config.mqtt);

    server.on('clientConnected', function(client) {
        console.log('client connected', client.id);
    });
     
    server.on('published', function(packet, client) {
      console.log('Published', packet.payload);
    });

    server.on('ready', function() {
        console.log("mosca ready");
    });

    return server;
}


exports.start = start;
