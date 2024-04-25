const mongoose = require('mongoose')


mongoose.connect("mongodb://localhost:27017/LoginSignupTutorial")
.then(()=>{
    console.log("mongo connected");
})
.catch(()=>{
    console.log("fail to connect")
})


const LoginSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = new mongoose.model("collection1", LoginSchema)

module.exports = collection;