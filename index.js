
//setup
var express = require('express');
var morgan = require('morgan');
var envconfig = require('./config.js')();

console.log(process.env.NODE_ENV);
console.log(envconfig);
//api setup
var user = require('./api/user.js');
var visitor = require('./api/visitor.js');
var visitee = require('./api/visitee.js');
var appointment = require('./api/appointment.js');
var mailrecord = require('./api/mailrecord.js');
var company = require('./api/company.js');


//initalize app
var app = express();

app.use('/api/user', user);
app.use('/api/visitor', visitor);
app.use('/api/visitee',visitee);
app.use('/api/appointment', appointment);
app.use('/api/mailrecord', mailrecord);
app.use('/api/company', company);


app.listen(envconfig.port);
console.log("App is running on "+envconfig.port);
