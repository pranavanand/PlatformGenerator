var express = require('express');
var router = express.Router();
var db = require('./db.js');
var sql = require('./dbhelpers.js');
var crypto = require('crypto');

router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
});
router.post('/signup', function(req, res, next) {
	if (!req.body.username) {
		res.send({result: 'error', error: 'Invalid username'});
		return;
	}
	if (req.body.password.length < 9) {
		res.send({result: 'error', error: 'Invalid password length - must be greater than 8 characters'});
		return;
	}
	if (sql.createTable('users')) {
		if (sql.createColumn('id'))
		res.send({result: 'error', error: 'Error creating users table'});
		return;
	}

	var sql = 'INSERT INTO users SET ?';
	var password = crypto.createHash('md5').update(req.body.password).digest('hex');
	db.query(sql, [])

});


function crea
module.exports = router;
