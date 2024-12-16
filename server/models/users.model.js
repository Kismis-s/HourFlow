const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please input name!"],
    },
    email: {
        type: String,
        required: [true, "Please input email!"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please input password!"],
        unique: true,
    }
},{
    timestamps: true,
})

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;