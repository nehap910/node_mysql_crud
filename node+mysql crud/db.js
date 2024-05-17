const mysql = require('mysql2/promise');

const mysqlPool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'Neha@123',
    database:'employeedb'
})


module.exports =mysqlPool