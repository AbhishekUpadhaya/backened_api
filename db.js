const mongoose = require("mongoose");

//define the MongoDb connectio Url

const mongo_url = "mongodb://127.0.0.1:27017/";

mongoose.connect(mongo_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//creating a object db 
const db = mongoose.connection;
db.on('connected' ,()=>{
    console.log("connected to MongoDb server")
})
db.on('error' ,()=>{
    console.log("connected Error")
})
db.on('disconnected' ,()=>{
    console.log("Disconnected to MongoDb server")
})

//export a database connection
module.exports=db;