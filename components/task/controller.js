const service = require('./service')
const catchAsync = require('../../utils/catchAsync')
var sparkles = require("sparkles")();

module.exports = {
    create: catchAsync(async (req,res,next) => {
        let task = await service.create(req.body)
        sparkles.emit("create_task", {task})
        return res.json({ task })
    }),
    update: catchAsync(async (req,res,next) => {
        let task = await service.update(req.params.id, req.body)
        sparkles.emit("update_task", {task})
        return res.json({ task })
    }),
    remove: catchAsync(async (req,res,next) => {
        let task = await service.remove(req.params.id)
        return res.json({ task })
    }),
    getAll: catchAsync(async (req,res,next) => {
        let tasks = await service.getAll()
        return res.json({ tasks })
    }),
    getById: catchAsync(async (req,res,next) => {
        let task = await service.create(req.params.id)
        sparkles.emit("get_task_by_id", {task})
        return res.json({ task })
    }),
}