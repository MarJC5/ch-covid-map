var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

var http = require('http');
var server = http.Server(app);

app.use(express.static('static'));

server.listen(port, function(){
  console.log('Server is running');
})
