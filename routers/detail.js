module.exports = function(app){
	app.get('/detail',function(req,res){
		res.render('detail');
	});
}