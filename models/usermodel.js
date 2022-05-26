const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userShema = new Schema({
    membername:String,
    password:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    }
})

const User = mongoose.model('User',userShema)

module.exports = User