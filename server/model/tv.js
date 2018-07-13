const Schema = require('../model/mongoose.js');
const shortid = require('shortid');
const mongoose = require('mongoose');
let TvSchema = new Schema({
    _id:{
        type:String,
        default:shortid.generate
    },
    username:{type:String},
    arr:{type:Object}
},{
    collection:'tv',
    versionKey:false
})
let Tv = mongoose.model('Tv',TvSchema);
module.exports = Tv;