const handler = require("../../utils/router");
const controller = require('./controller')
const router = 
handler().
post("/task", controller.create).
get("/tasks", controller.getAll).
delete("/task/:id", controller.remove).
get("/task/:id", controller.getById).
put("/task/:id", controller.update);

module.exports = router;
