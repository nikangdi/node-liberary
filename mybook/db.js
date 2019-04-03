// 操作数据库的通用api

const mysql  = require('mysql');
exports.base = (sql, data, callback)=>{
    const connection = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'book'
    });
    connection.connect();
    connection.query(sql,data,function(error,results,fileds){
            if(error) throw error;
            callback(results);
    })

connection.end();}