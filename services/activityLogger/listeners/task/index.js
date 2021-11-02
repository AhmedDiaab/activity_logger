const { logActivity } = require("../../queue");
var sparkles = require("sparkles")();

const handlers = () => {
  sparkles.on("create_task", async (payload) => {
    await logActivity(payload);
  });

  sparkles.on("update_task", async (payload) => {
    await logActivity(payload);
  });

  sparkles.on("get_task_by_id", async (payload) => {
    await logActivity(payload);
  });
};

module.exports = { handlers };
