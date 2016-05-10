module.exports = function(app){
	app.get('/login',function(req,res){
		res.send('这是登录页');
	});
}