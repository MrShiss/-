const Schema = require('../model/mongoose.js');
const shortid = require('shortid');
const mongoose = require('mongoose');
let AnswerSchema = new Schema({
    _id:{
        type:String,
        default:shortid.generate
    },
    username:{type:String},
    q_id:{type:String},
    answer:{type:String},
    date:{type:String},
},{
    collection:'answer',
    versionKey:false
})
let Answer = mongoose.model('Answer',AnswerSchema);
module.exports = Answer;