const mysql=require('mysql')

var connect =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"crypto"
})


module.exports={connect}