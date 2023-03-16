const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const userSchema = new mongoose.Schema({
    userID: {
        type: String,
        required: true,
    }
    ,
    firstName: {
        type: String,
        required: true,

    }
    ,
    lastName: {
        type: String,
        required: true,

    }
    ,
    displayName: {
        type: String,
        required: true,

    },
    age: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    phoneNo: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    userType: {
        type: String,
        required: true,
    }
});

const user = new mongoose.model("user", userSchema);
module.exports = user;
