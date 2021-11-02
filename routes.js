const router = require('express').Router()
const taskRoutes = require('./components/task/routes')
const userRoutes = require('./components/user/routes')
const postRoutes = require('./components/post/routes')


router.use(taskRoutes)
router.use(userRoutes)
router.use(postRoutes)


module.exports = router