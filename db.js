var mysql = require('mysql');
var connection = mysql.createConnection({
	host	: 'localhost',
	user	: 'username',
	password: 'password'
});

connection.connect(function(err) {
  if (err) {
    console.log('error connecting: ' + err.stack);
    return;
  }
  console.log('connected to db');
});
	//database: 'plat_gen'

module.exports = connection;
