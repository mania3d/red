var path = require('path');

const dotenv = require('dotenv');
dotenv.config();

const config = {
    app: {
        port: 8000
    },
    nodered: {
        autoInstallModules: true,
        httpAdminRoot:"/red",
        httpNodeRoot: "/api",
        functionGlobalContext: {}, 
        mongoUrl: process.env.MONGO_URL,
        storageModule: require("./mongostorage")
    }       
};

module.exports = config;
