const mongoose = require("mongoose");
require('dotenv').config();

//define the MongoDb connectio Url

// const mongo_url = process.env.MONGODB_URL_LOCAL;
const mongo_url=process.env.MONGODB_URL;

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