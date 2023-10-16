const express = require("express");
app = express();
const conn = require("./connection");
const port = 3000;
//const gymMember = require('./model');
const path = require('path');
const router= require("./route/routes")

app.use(express.static(path.join(__dirname,'public')));


app.use(express.json());
app.set("view engine", "ejs");
app.use(express.urlencoded({extended : false}));
app.use(router);



app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})