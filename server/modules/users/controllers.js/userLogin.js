const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userLogin = async(req, res)=>{
    const Users = mongoose.model("users");

    const {email, password} = req.body;

    //Validations..
    try{
        if(!email) throw "Please input email.";
        if(!password) throw "Please input password.";

        const getUser = await Users.findOne({
            email: email,
        })
        if(!getUser) throw "The email does not exist!";

        const matchedPassword = await bcrypt.compare(password, getUser.password);

        if (!matchedPassword) throw "The password does not match!";
    }catch(e){
        res.status(400).json({
            status: "Failed to login.",
            message: e
        })
        return;
    }
    res.status(200).json({
        status: "Logged in!",
    })
}

module.exports = userLogin;