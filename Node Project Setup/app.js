var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public')); //__dir and not _dir
var port = 8000; // you can use any port
app.listen(port);

// Console will print the message
console.log('Server running at http://127.0.0.1:8000/');