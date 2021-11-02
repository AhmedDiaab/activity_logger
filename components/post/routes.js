const handler = require("../../utils/router");
const controller = require('./controller')
const router = 
handler().
post("/post", controller.create).
get("/posts", controller.getAll).
delete("/post/:id", controller.remove).
get("/post/:id", controller.getById).
put("/post/:id", controller.update);

module.exports = router;
