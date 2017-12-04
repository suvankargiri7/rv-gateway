var config = {
    dev: {
        name: 'development',
        NODE_ENV : 'prod',
        port: '4900',
        data_server_url: 'https://cppjs.com/',
        db: {
            host: 'localhost',
            user: '',
            password: '',
            database: 'rv_sg',
            minPoolLimit: 0,
            maxPoolLimit: 100,
            timeout: 10000,
            debug: false
        },
    },
    prod: {
        name: 'production',
        NODE_ENV : 'prod',
        port: '5000',
        data_server_url: 'https://cppjs.com/',
        db: {
            host: 'localhost',
            user: '',
            password: '',
            database: 'rv_sg',
            minPoolLimit: 0,
            maxPoolLimit: 100,
            timeout: 10000,
            debug: false
        },
    }
};

module.exports = function (mode) {
    return config[mode || process.env.NODE_ENV] || config.dev;
};
