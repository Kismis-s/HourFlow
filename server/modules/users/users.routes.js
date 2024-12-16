const express = require("express");
const userRouter = express.Router();
const userRegister = require("./controllers.js/userRegister");
const userLogin = require("./controllers.js/userLogin");

userRouter.post("/register", userRegister);
userRouter.post("/login", userLogin);

module.exports = userRouter;