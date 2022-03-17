const express = require("express");
const app = express();
const cors = require('cors');
const dotenv=require('dotenv').config()
const adminRoute=require('./route/admin_route')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use("/admin", adminRoute);
app.get('',(req,res)=>{
    res.send('welcome crypto')
})

app.listen(process.env.PORT,()=>{
    console.log(`server is running on the port: ${process.env.PORT}`)
})


