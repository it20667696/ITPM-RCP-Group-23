const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
    },
    nic:{
        type:String,
        required:true,
        unique:true,
    },
    province:{
        type:String,
        required:false,
    },
    destric:{
        type:String,
        required:false,
    },
    city:{
        type:String,
        required:false,
    },
    area:{
        type:String,
        required:false,
    },
    postal:{
        type:String,
        required:false,
    },
    address:{
        type:String,
        required:false,
        },

},
{ timestamps:true}
);

module.exports = mongoose.model("paymentSchema",PaymentSchema);