const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const collectReqSchema = new mongoose.Schema({
   
    custermer_id: {
        type: String,
        required: true,

    },


    name: {
        type: String,
        required: true,
    },  
    contact: {
        type: String,
        required: true,
    }, 

    
    address: {
        type: String,
        required: true,

    }
    ,

    time: {
        type: String,
        required: true,
    },

    date: {
        type: String,
        required: true,
    },

    qty: {
        type: String,
        required: true,
    },


    quality: {
        type: String,
        required: true,
    },

    material_type: {
        type: String,
        required: true,
    },

    latitude: {
        type: String,
        required: true,
    },

    longitude : {
        type: String,
        required: true,
    },


    status: {
        type: String,
        required: true,
    },

    
});

const collectReq = new mongoose.model("CollectReq", collectReqSchema);
module.exports = collectReq;
