const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/gymRegistration")
.then(()=>{ console.log("db succesfully connected")})
.catch((err)=> {err});

