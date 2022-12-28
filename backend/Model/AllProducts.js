const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    name:{type:String, required : true},
    email:{type:String, required : true},
    image:{type:String, required : true},
    owner:{type:String, required : true},
})
const productModel = mongoose.model("productModel", productSchema)

module.exports =productModel;