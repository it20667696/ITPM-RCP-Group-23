const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dataSchema = new mongoose.Schema({
    
    product_id: {
        required: true,
        type: Number
    },
    product_name: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    manufacturer:{
        required: true,
        type:String
    },
    price:{
        required:true,
        type:Number
    },
    quantity: {
        required: true,
        type: Number
    },
    manufacture_date: {
        required: true,
        type: Number
    },
    status: {
        required: true,
        type: String
    },
    section:{
        required:true,
        type:String
    },
    category:{
        required:true,
        type:String
    }

})

module.exports = mongoose.model('inventoryItems', dataSchema)
