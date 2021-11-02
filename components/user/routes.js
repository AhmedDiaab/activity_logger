const handler = require("../../utils/router");
const controller = require('./controller')
const router = 
handler().
post("/user", controller.create).
get("/users", controller.getAll).
delete("/user/:id", controller.remove).
get("/user/:id", controller.getById).
put("/user/:id", controller.update);

module.exports = router;
