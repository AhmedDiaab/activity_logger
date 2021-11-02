const {model, Schema} = require('mongoose')
const schema = new Schema({
    title: String
})
const User = model('user', schema)
module.exports = User

