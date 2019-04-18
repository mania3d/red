const config = {
    app: {
        port: 8000
    },
    mqtt: {
        backend : {
            type: 'mongo',
            url: 'mongodb://localhost:27017/mqtt',
            pubsubCollection: 'ascoltatori',
            mongo: {}
        },
        port:1883
    },
    nodered: {
        httpAdminRoot:"/red",
        httpNodeRoot: "/api",
        userDir:"./.nodered/",
        functionGlobalContext: { }    // enables global context
    }       
};

module.exports = config;
