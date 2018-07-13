const Schema = require('../model/mongoose.js');
const shortid = require('shortid');
const mongoose = require('mongoose');
let QuestionSchema = new Schema({
    _id:{
        type:String,
        default:shortid.generate
    },
    username:{type:String},
    title:{type:String},
    question:{type:String},
    date:{type:String},
},{
    collection:'question',
    versionKey:false
})
let Question = mongoose.model('Question',QuestionSchema);
module.exports = Question;