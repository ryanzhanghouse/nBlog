exports.index = function(req, res){
	var total = 0;
	
}
exports.about = function(req, res){}
exports.manage = function(req, res){}
exports.login = function(req, res){}
exports.checkLogin = function(req, res, next){
	if (!req.session.user){
		res.redirect('/login');
	}
	return next();
}
exports.loginView = function(req, res){}
exports.login = function(req, res){}
exports.logout = function(req, res){}
exports.googleAuthView = function(req, res){}
exports.checkPwd = function(req, res, next){}
