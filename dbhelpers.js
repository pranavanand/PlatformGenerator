var db = require('./db.js');

function createTable(tablename) {
	var sql = 'CREATE TABLE IF NOT EXISTS ' + tablename;
	db.query(sql, function(error, result) {
		if (error) {
			console.log('error creating table ' + tablename);
			console.log(error);
			return -1;
		} else {
			console.log('success');
		}
	});
}

exports.create = createTable;