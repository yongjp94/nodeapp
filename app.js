var express = require('express');
var jade = require('jade');
var nib = require('nib');
var routes = require('./routes');
// var user = require('.routes/user')
var http = require('http');
var path = require('path');
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/nodeapp');

var portNumber = 3000;

//Init express
var app = express();
console.log('Express Initialized');

//Set Views Folder
app.set('views',__dirname + '/views');

//Init Jade
app.set('view engine', 'jade');
console.log('Jade Initialized');

//Stylus Middleware
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('mykey'));
app.use(express.session());
app.use(app.router);
app.use(stylus.middleware(
	{
		src:__dirname + '/public',
		compile: compile
	}
))

//Set Static Folder
app.use(express.static(__dirname+ '/public'));

//Render Index
app.get('/',routes.index);
app.get('/userlist',routes.userlist(db));
//app.post('/adduser',routes.adduser(db));

//App Listen
app.listen(portNumber);
console.log('Connected to port: ' + portNumber);
