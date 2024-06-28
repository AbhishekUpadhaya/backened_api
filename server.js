const express = require("express");
const app = express();
const db = require("./db");
// const MenuItem = require("./models/MenuItem");

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

app.listen(3000, () => {
  console.log("server is running ");
});
