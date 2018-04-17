var express = require('express');
var app = express();
var index = require("./controller/router/index.js");

app.use('/', index);

// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
