const { rejects } = require('assert');
const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit:10,
    password:'admin@123',
    user:'root',
    database:'productdetails',
    host:'localhost',
    port:'3306'
});

let prodb = {};

prodb.all=()=>{
    return new Promise((resolve,reject)=>{
        pool.query('SELECT * FROM PRODUCT',(err,result)=>{
            if(err){
                return reject(err);
            }
            return resolve(result);
        })
    });
}

module.exports = prodb;