const app = require('./app')
require('./config/database')
const logger = require('./services/activityLogger/listener')

logger.useListeners()
app.listen(3005, () => {
    console.log('Working on 3005...')
})