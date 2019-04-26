var path = require('path');
var when = require('when');

const dotenv = require('dotenv');
dotenv.config();

const config = {
    app: {
        port: process.env.PORT | 8000
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
        storageModule: require("./mongostorage"),
        adminAuth: {
            type: "credentials",
            users: [{
                username: process.env.NODE_RED_USERNAME,
                password: process.env.NODE_RED_PASSWORD,
                permissions: "*"
            }]
        }
    }       
};

module.exports = config;