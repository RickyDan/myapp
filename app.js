var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

var requestTime = function(req,res,next){
	req.reqTime = Date.now();
	next();
};

app.use(requestTime);
app.get('/',function(req,res){
	var reqText = 'Hello world';
	reqText += "require at " + req.reqTime;
	res.send(reqText);
});

app.get('/ab?cd',function(req,res){
	res.send('ab?cd');	
});

app.listen(port,function(){
	console.log("Server has started at port " + port);
});
