const mongoose = require("mongoose");


const TranscationScehma =new mongoose.Schema({
    amount:Number,

    description:String,

    date:{
        type:Date,
        default:new Date()
        

    },
    
    createdAt:{
        type:Date,
        default:Date.now    
    }

});

module.exports = mongoose.model('Transcation', TranscationScehma);