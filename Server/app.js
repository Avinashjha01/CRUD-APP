require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
require("./db/conn");
const cors = require("cors");
const router = require("./Routes/router");
const PORT = 8080;





//remove conflict font-back end port running
app.use(cors({
    origin :"https://localhost:3001",
}
));
//Returs Fronted Files in Json format
app.use(express.json());
app.use(router);
//get Response
// app.get("/",(req,res)=>{
//     res.status(200).json("server start");
// });





//sever start 
app.listen(PORT,(req,res)=>{
    console.log("Server is running on Port :",PORT)
});