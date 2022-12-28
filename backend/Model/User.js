const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name:{type:String, required : true},
    email:{type:String, required : true, unique:true},
    password:{type:String, required : true},
    // isSeller:{type:Boolean},
    sales:{type:Array, default:[]},
    messages:{type:Array, default:[]},
})
const userModel = mongoose.model('userModel', userSchema)

module.exports = userModel