//Homepage
exports.index = function(req,res){
	res.render('index', {title: 'Welcome!'});
};

//User List
exports.userlist = function(db){
	return function(req,res){
		var collection = db.get('usercollection');
		collection.find((), (), function(e, docs) {
			res.render('userlist',{
				"userlist" : docs,
				title : "User List"
			});
		});
	};
};