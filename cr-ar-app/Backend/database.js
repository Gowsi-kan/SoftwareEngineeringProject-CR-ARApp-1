var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '127.0.0.1',
    database: 'ar_app',
    user: 'root',
    password: '',
    port: '3307'
})

module.exports = connection;
