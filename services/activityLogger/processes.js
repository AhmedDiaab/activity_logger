const { Job } = require('bull');
const {logData} = require('./logger/service')

const activityLoggerProcess = async (job) => {
  // save to db logic here using loggerService
  let data = job.data.task
  await logData(data)
};

module.exports = activityLoggerProcess;
