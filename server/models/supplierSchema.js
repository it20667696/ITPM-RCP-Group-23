const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const supplierSchema = new mongoose.Schema({
   
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
    phoneNo: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
    },


    supplierType: {
        type: String,
        required: true,
    }
});

const supplier = new mongoose.model("supplier", supplierSchema);
module.exports = supplier;
