const Schema = require('../model/mongoose.js');
const shortid = require('shortid');
const mongoose = require('mongoose');
let UserSchema = new Schema({
    _id:{
        type:String,
        default:shortid.generate
    },
    username:{type:String},
    sex:{type:String},
    email:{type:String},
    newPsw:{type:String},
    date:{type:String}
},{
    collection:'user',
    versionKey:false
})
let User = mongoose.model('User',UserSchema);
module.exports = User;