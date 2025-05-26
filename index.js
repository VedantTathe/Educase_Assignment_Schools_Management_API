const express = require('express');
const apiRouter = require('./routes/api.routes');
const db = require('./config/db');
const dotenv = require('dotenv');
dotenv.config();


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/',apiRouter);



// app.listen(process.env.PORT || 3000,(req,res)=>{
//     console.log('Server is Running..!');
// });


module.exports = app;

