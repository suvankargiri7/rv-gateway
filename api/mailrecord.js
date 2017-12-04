var express = require('express');
var morgan = require('morgan');
var envconfig = require('../config.js')();

// Local Variables
var router = express.Router();

router.get('/test', function (req, res) {
    try {
        var resultData = {"isAuthenticate": true,"statusMsg": "SUCCESS"};
        res.json(resultData);
    } catch (error) {
        var resultData = {"isAuthenticate": false,"statusMsg": "ERROR"};
        res.json(resultData);
    }
});

module.exports = router;