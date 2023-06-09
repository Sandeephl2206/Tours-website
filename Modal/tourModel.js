const mongoose = require("mongoose");
const tourSchema = mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique:true
    },
    rating:{
        type:Number,
        default:4.5
    },
    price:{
        type:Number,
        required:[true,"A tour must have a price"]
    }
})
module.exports = mongoose.model("Tour",tourSchema); 