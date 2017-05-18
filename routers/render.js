var siteFun = require('./../routers/site');

module.exports = function(app) {

	// 首页
    app.get('/', function(req, res) {
        res.redirect('/index');
    })
	
	// 首页
    app.get('/index', function(req, res) {
        res.render('index',siteFun('/index'))
    })

 	// 关于我们
    app.get('/about', function(req, res) {
        res.render('about',siteFun('/about'))
    })

    // 联系我们
    app.get('/contact', function(req, res) {
        res.render('contact',siteFun('/contact'))
    })

    // 其他
    app.get('*', function(req, res) {
        res.redirect('/index');
    })



}
