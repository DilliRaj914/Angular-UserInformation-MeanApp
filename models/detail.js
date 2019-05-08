var mongoose = require('mongoose');

var detailSchema = new mongoose.Schema({

    ID:String,
    Name:String,
   address:String,
    MobileNumber:Number,
    updated_date:{type:Date,default:Date.now},
});

module.exports = mongoose.model('detail',detailSchema);