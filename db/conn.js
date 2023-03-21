const mongoose = require("mongoose");

const connectdb = async ()=>{
    try {
       await mongoose.connect("mongodb+srv://sandy:sandy@tours.5loohln.mongodb.net/tourscollection?retryWrites=true&w=majority");
       console.log("db connected");
    } catch (error) {
        throw new Error(error)
    }
}
module.exports = connectdb;