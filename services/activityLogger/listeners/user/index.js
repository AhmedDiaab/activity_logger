const { logActivity } = require("../../queue");
var sparkles = require("sparkles")();

const handlers = () => {
  sparkles.on("create_user", async (payload) => {
    await logActivity(payload);
  });

  sparkles.on("update_user", async (payload) => {
    await logActivity(payload);
  });

  sparkles.on("get_user_by_id", async (payload) => {
    await logActivity(payload);
  });
};

module.exports = { handlers };
