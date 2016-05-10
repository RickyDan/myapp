module.exports = function(app){
	app.get('/',function(req,res){
		res.send("这是首页");
	});
};