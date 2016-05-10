module.exports = function(app){
	require('./index')(app);
	require('./detail')(app);
	require('./login')(app);
	require('./register')(app);
}