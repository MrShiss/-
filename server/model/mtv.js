const Schema = require('../model/mongoose.js');
const shortid = require('shortid');
const mongoose = require('mongoose');
let MtvSchema = new Schema({
    _id:{
        type:String,
        default:shortid.generate
    },
    username:{type:String},
    arr:{type:Object},
    date:{type:String}
},{
    collection:'mtv',
    versionKey:false
})
let Mtv = mongoose.model('Mtv',MtvSchema);
module.exports = Mtv;