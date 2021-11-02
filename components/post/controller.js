const service = require('./service')
const catchAsync = require('../../utils/catchAsync')
var sparkles = require("sparkles")();

module.exports = {
    create: catchAsync(async (req,res,next) => {
        let post = await service.create(req.body)
        sparkles.emit("create_post", {post})
        res.json({ post })
    }),
    update: catchAsync(async (req,res,next) => {
        let post = await service.update(req.params.id, req.body)
        sparkles.emit("update_post", {post})
        res.json({ post })
    }),
    remove: catchAsync(async (req,res,next) => {
        let post = await service.remove(req.params.id)
        res.json({ post })
    }),
    getAll: catchAsync(async (req,res,next) => {
        let posts = await service.getAll()
        res.json({ posts })
    }),
    getById: catchAsync(async (req,res,next) => {
        let post = await service.create(req.params.id)
        sparkles.emit("get_post_by_id", {post})
        res.json({ post })
    }),
}