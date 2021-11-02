var sparkles = require("sparkles")();
const { logActivity } = require("./queue");
const taskListeners = require('./listeners/task/index')
const useListeners = () => {
  sparkles.on("create_post", async (payload) => {
    await logActivity();
  });
  
  taskListeners.handlers()
}
module.exports = {useListeners}