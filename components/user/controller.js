const service = require('./service')
const catchAsync = require('../../utils/catchAsync')
var sparkles = require("sparkles")();

module.exports = {
    create: catchAsync(async (req,res,next) => {
        let user = await service.create(req.body)
        sparkles.emit("create_user", {user})

        res.json({ user })
    }),
    update: catchAsync(async (req,res,next) => {
        let user = await service.update(req.params.id, req.body)
        sparkles.emit("update_user", {user})

        res.json({ user })
    }),
    remove: catchAsync(async (req,res,next) => {
        let user = await service.remove(req.params.id)
        res.json({ user })
    }),
    getAll: catchAsync(async (req,res,next) => {
        let users = await service.getAll()
        res.json({ users })
    }),
    getById: catchAsync(async (req,res,next) => {
        let user = await service.create(req.params.id)
        sparkles.emit("get_user_by_id", {user})

        res.json({ user })
    }),
}