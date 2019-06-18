const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


const userRoutes = require("./routes/user");

const dmaicRoutes = require("./routes/dmaic");




const app = express();

mongoose.connect("mongodb://localhost:27017/dmaicdb");
mongoose.connection.on("connected",()=>{
    console.log("mongodb connected");

})
mongoose.connection.on("error",()=>{
    console.log("mongodb not connected");

})



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});


app.use("/api/user", userRoutes);
app.use("/api/dmaic",dmaicRoutes);


const PORT = 3000;
 app.listen(3000,()=>{
console.log("server satrted port:"+PORT);
 })

module.exports = app;