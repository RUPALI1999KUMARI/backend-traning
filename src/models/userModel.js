const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {

    name:String,
    // city:string,
    address: {
        pincode: Number,
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema) //users



