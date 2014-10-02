var express = require('express');
var app = express();

var router = express.Router();

app.use(express.static(__dirname + '/public'));
app.use(logger());

app.engine('jade', require('jade').__express);

app.listen(3000);