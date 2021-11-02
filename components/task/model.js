const {model, Schema} = require('mongoose')
const schema = new Schema({
    title: String
})
const Task = model('task', schema)
module.exports = Task

