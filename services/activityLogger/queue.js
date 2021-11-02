const Bull = require("bull");
const activityLoggerProcess = require("./processes");

const activityLoggerQueue = new Bull("activityLogger", {
  redis: {
    host: "redis-17363.c293.eu-central-1-1.ec2.cloud.redislabs.com",
    password: "VPcG4CwyP2Efitv04kBlQKoG8W6CXVtV",
    port: 17363,
  },
});

activityLoggerQueue.process(activityLoggerProcess);
const logActivity = async (data) => {
  await activityLoggerQueue.add(data, {});
};

module.exports = {
  logActivity,
};
