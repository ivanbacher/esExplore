module.exports.controller = function(app){

	app.get('/', function (req, res) {
		res.render("index");
	});

	app.get('/explorerView', function ( req, res ){
		res.render('partials/explorerView');
	});
};