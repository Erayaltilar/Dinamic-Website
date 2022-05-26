const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const memberSchema = new Schema({
    membername:String,
    email:{
        type:String,
        require:true
    },
    message:String
})

const Member = mongoose.model('Member',memberSchema)

module.exports = Member