var express = require('express');
var path    = require('path');
var app = express();

// 设定views变量，意为视图存放的目录
app.set('views', path.join(__dirname, 'views'));
app.set( 'view engine', 'html' );
app.engine( '.html', require( 'ejs' ).__express );
var routers = require('./routers/routers');

var port = process.env.PORT || 8080;

routers(app);

app.listen(port,function(){
	console.log("Server has started at port " + port);
});
