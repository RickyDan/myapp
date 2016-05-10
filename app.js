var express = require('express');
var app = express();
var routers = require('./routers/routers');

var port = process.env.PORT || 8080;

routers(app);

app.listen(port,function(){
	console.log("Server has started at port " + port);
});
