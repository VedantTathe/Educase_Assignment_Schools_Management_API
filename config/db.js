const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

const db = mysql.createConnection({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE,
    port:process.env.DBPORT
});

db.connect((err)=>{
    if(err)
    {
        console.log("Error Conneecting to DB: ",err);
    }
    else
    {
        console.log("Connected to DB");
    }

});


module.exports = db;