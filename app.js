const express = require('express')
const app = express()
const routes = require('./routes')

app.use(express.json())
app.use('/api/v0',routes)

module.exports = app