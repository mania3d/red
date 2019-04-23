var mosca = require('mosca');

var start = async function(settings) {
  return new Promise(resolve => {
    var server = new mosca.Server(settings);

    server.on('clientConnected', function(client) {
        console.log('MQTT client connected', client.id);
    });
    
    server.on('published', function(packet, client) {
      console.log('MQTT Published', packet.payload);
    });

    server.on('ready', function() {
        console.log("MQTT ready");
        resolve(server);
    });
  });
}

exports.start = start;
