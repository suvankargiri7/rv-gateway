var express = require('express');
var morgan = require('morgan');
var envconfig = require('../config.js')();

// Local Variables
var router = express.Router();

//CHECK USER APIS
router.get('/check', function (req, res) {
    try {
        var resultData = {"status_code":"S0001","isAuthenticate": true,"statusMsg": status_code.success[0001]};
        res.json(resultData);
    } catch (error) {
        var resultData = {"status_code":"E0001","isAuthenticate": false,"statusMsg": status_code.error[0001] };
        res.json(resultData);
    }
});

//APPOINTMENT CREATE
router.post('/create', function (req, res) {
    try {
        var resultData = {"status_code":"S0001","isAuthenticate": true,"statusMsg": status_code.success[0001]};
        res.json(resultData);
    } catch (error) {
        var resultData = {"status_code":"E0001","isAuthenticate": false,"statusMsg": status_code.error[0001] };
        res.json(resultData);
    }
});


//APPOINTMENT DUPLICATE
router.post('/duplicate', function (req, res) {
    try {
        var resultData = {"status_code":"S0001","isAuthenticate": true,"statusMsg": status_code.success[0001]};
        res.json(resultData);
    } catch (error) {
        var resultData = {"status_code":"E0001","isAuthenticate": false,"statusMsg": status_code.error[0001] };
        res.json(resultData);
    }
});

//APPOINTMENT IMPORT
router.post('/import', function (req, res) {
    try {
        var resultData = {"status_code":"S0001","isAuthenticate": true,"statusMsg": status_code.success[0001]};
        res.json(resultData);
    } catch (error) {
        var resultData = {"status_code":"E0001","isAuthenticate": false,"statusMsg": status_code.error[0001] };
        res.json(resultData);
    }
});

//APPOINTMENT UPDATE
router.post('/update', function (req, res) {
    try {
        var resultData = {"status_code":"S0001","isAuthenticate": true,"statusMsg": status_code.success[0001]};
        res.json(resultData);
    } catch (error) {
        var resultData = {"status_code":"E0001","isAuthenticate": false,"statusMsg": status_code.error[0001] };
        res.json(resultData);
    }
});



module.exports = router;