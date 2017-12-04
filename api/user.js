var express = require('express');
var morgan = require('morgan');
var envconfig = require('../config.js')();
var status_code = require('../status_code.js')();

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


//USER LOGIN
router.post('/lin', function (req, res) {
    try {
        var resultData = {"status_code":"S0001","isAuthenticate": true,"statusMsg": status_code.success[0001]};
        res.json(resultData);
    } catch (error) {
        var resultData = {"status_code":"E0001","isAuthenticate": false,"statusMsg": status_code.error[0001] };
        res.json(resultData);
    }
});

//USER LOGOUT
router.post('/lout', function (req, res) {
    try {
        var resultData = {"status_code":"S0001","isAuthenticate": true,"statusMsg": status_code.success[0001]};
        res.json(resultData);
    } catch (error) {
        var resultData = {"status_code":"E0001","isAuthenticate": false,"statusMsg": status_code.error[0001] };
        res.json(resultData);
    }
});

//USER CHANGE PASSWORD
router.post('/cpassword', function (req, res) {
    try {
        var resultData = {"status_code":"S0001","isAuthenticate": true,"statusMsg": status_code.success[0001]};
        res.json(resultData);
    } catch (error) {
        var resultData = {"status_code":"E0001","isAuthenticate": false,"statusMsg": status_code.error[0001] };
        res.json(resultData);
    }
}); 

//USER ROLES DETAILS
router.post('/rdetails', function (req, res) {
    try {
        var resultData = {"status_code":"S0001","isAuthenticate": true,"statusMsg": status_code.success[0001]};
        res.json(resultData);
    } catch (error) {
        var resultData = {"status_code":"E0001","isAuthenticate": false,"statusMsg": status_code.error[0001] };
        res.json(resultData);
    }
}); 

//USER COMPANY DETAILS
router.post('/cdetails', function (req, res) {
    try {
        var resultData = {"status_code":"S0001","isAuthenticate": true,"statusMsg": status_code.success[0001]};
        res.json(resultData);
    } catch (error) {
        var resultData = {"status_code":"E0001","isAuthenticate": false,"statusMsg": status_code.error[0001] };
        res.json(resultData);
    }
}); 

//USER PROFILE DETAILS
router.post('/pdetails', function (req, res) {
    try {
        var resultData = {"status_code":"S0001","isAuthenticate": true,"statusMsg": status_code.success[0001]};
        res.json(resultData);
    } catch (error) {
        var resultData = {"status_code":"E0001","isAuthenticate": false,"statusMsg": status_code.error[0001] };
        res.json(resultData);
    }
}); 


module.exports = router;