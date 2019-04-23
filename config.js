const dotenv = require('dotenv');
dotenv.config();

const config = {
    app: {
        port: 8000
    },
    mqtt: {
        backend : {
            type: 'mongo',
            url: process.env.MONGODB_URI,
            pubsubCollection: 'pubsub',
            mongo: {}
        },
        port:1883
    },
    nodered: {
        httpAdminRoot:"/red",
        httpNodeRoot: "/api",
        functionGlobalContext: {}, 
        storageModule: require("node-red-flows-mongo"),
        mongoUrl: process.env.MONGODB_URI
    }       
};

module.exports = config;
