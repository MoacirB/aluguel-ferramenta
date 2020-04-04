const mysql = require('mysql');
module.exports = function(){
	const connection = mysql.createConnection({
			host : 'localhost',
			user : 'root',
			password : '',
			database : 'aluguel_ferramenta'
		});
	connection.connect();
	return connection;
}
	
