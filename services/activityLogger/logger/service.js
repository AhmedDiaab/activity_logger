const { Document } = require('mongoose')
const Log = require('./model')

/**
 * used to save data in database, can be used by other services
 * @param {Object<{title: String, body: String, link: String, image: String}>} log 
 * @returns {Promise<Document>} log saved in database
 */
const logData = async (log) => {
    let data = new Log(log)
    return data.save()
}

module.exports = {logData}