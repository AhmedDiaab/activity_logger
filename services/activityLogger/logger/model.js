const {Schema, model} = require('mongoose')
const logSchema = new Schema({
    title: {
        type: String,
    },
    body: {
        type: String,
    },
    link: {
        type: String,
    },
    image: {
        type: String,
    }
})

const Log = model('log',logSchema)

module.exports = Log