const {model, Schema} = require('mongoose')
const schema = new Schema({
    title: String
})
const Post = model('post', schema)
module.exports = Post

