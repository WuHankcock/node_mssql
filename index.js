/**
 * 测试sqlserverdbhelper
 */
const mssql = require('mssql');
const dbHelper = require('./sqlserverdbhelper');
const config = require('./config');

let sql = 'select * from employee';

dbHelper.eval(config, sql).then(result => {
    console.log(result);
}).catch(err => {
    console.log(err);
})


