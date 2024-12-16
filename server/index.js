const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./modules/users/users.routes");
require("./models/users.model");

require("dotenv").config();

const app=express();

app.use(express.json());

mongoose.connect(process.env.mongo_connect).then(()=>{
    console.log("Mongoose connected successfully!!");
}).catch((e)=>{
    console.log("Mongoose connected unsuccessfully!!", e);
})

app.use("/users", userRouter);

app.listen((6000), ()=>{
    console.log("Server started!");
});