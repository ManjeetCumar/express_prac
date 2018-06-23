var mongoose = require('mongoose')
var schema = mongoose.Schema

var user = new schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: String
})

module.exports = mongoose.model('user', user)