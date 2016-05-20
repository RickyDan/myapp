var express = require('express');
var handlebars = require('express3-handlebars').create({defaultLayout: 'main'});
var app     = express();
var routers = require('./routers/routers.js');

app.engine('handlebars', handlebars.engine);
app.set('view engine','handlebars');

app.set('port', process.env.PORT || 3000);

routers(app);

//404页面
app.use(function(req,res){
	res.type('text/plain');
	res.status(404);
	res.send('404 - Not found');
});

app.use(function(err,req,res,next){
	console.error(err.stack);
	res.type('text/plain');
	res.status(500);
	res.send('500 - Server Error');
});

app.listen(app.get('port'),function(){
	console.log(' Express started on http://localhost:' + app.get('port') + 
		'; Press Ctrl-C to terminate');
});