var express = require('express');
var app = express();
var SERVER_PORT = 3000;

var middleware = require('./middleware.js');

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication , function(req, res){
    res.send('<h2>About Us</h2>');
});

app.use(express.static(__dirname + '/public'));

// Start the server
app.listen(SERVER_PORT, function(){
    console.log('Express Server Running on Port ' + SERVER_PORT);
});