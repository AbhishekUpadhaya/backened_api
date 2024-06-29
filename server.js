const express = require("express");
const app = express();
const db = require("./db");
require('dotenv').config();
const MenuItem = require("./models/MenuItem");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("welcome to new server connection");
});


//import the router files
const personRoutes = require("./routes/personRoutes");
const menuItemRoutes = require("./routes/menuItemRoutes");

//use the routers
app.use('/menu',menuItemRoutes);

app.use("/person", personRoutes);





const  PORT=process.env.PORT ||3000;

app.listen(PORT, () => {
  console.log(`server is running on PORT:${PORT} `);
});
