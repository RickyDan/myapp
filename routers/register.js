module.exports = function(app){
	app.get('/register',function(req,res){
		res.send("这是注册页");
	});
}