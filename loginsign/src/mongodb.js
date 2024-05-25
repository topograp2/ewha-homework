const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/LoginSignUpTutorial")
.then(()=>{
    console.log("mongo connected");
})
.catch(()=>{
    console.log("Falied to connect");
})