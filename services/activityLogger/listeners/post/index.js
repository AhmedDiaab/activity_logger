const { logActivity } = require("../../queue");
var sparkles = require("sparkles")();

const handlers = () => {
  sparkles.on("create_post", async (payload) => {
    await logActivity(payload);
  });

  sparkles.on("update_post", async (payload) => {
    await logActivity(payload);
  });

  sparkles.on("get_post_by_id", async (payload) => {
    await logActivity(payload);
  });
};

module.exports = { handlers };
