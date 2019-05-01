const mysql_import = require('mysql-import');

require('mysql-import').config({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'gestion',
	onerror: err=>console.log(err.message)
}).import('gestion/gestion.sql').then(()=> {
	console.log('all statements have been executed')
});