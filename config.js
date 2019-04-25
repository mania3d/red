var path = require('path');
var when = require('when');

const dotenv = require('dotenv');
dotenv.config();

const config = {
    app: {
        port: 8000
    },
    nodered: {
        autoInstallModules: true,
        credentialSecret: false,
        httpAdminRoot:"/red",
        httpNodeRoot: "/api",
        httpNodeCors: {
            origin: "*",
            methods: "GET,PUT,POST,DELETE"
        },
        functionGlobalContext: {}, 
        mongoUrl: process.env.MONGO_URL,
        storageModule: require("./mongostorage")
    }       
};

module.exports = config;