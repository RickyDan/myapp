module.exports = function(app){
	app.get('/detail',function(req,res){
		res.send("这是详情页");
	});
}