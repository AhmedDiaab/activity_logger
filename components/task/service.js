const Task = require("./model");

const create = async (task) => {
  let _Task = new Task(task);
  return await _Task.save();
};

const update = async (_id, task) => {
  return await Task.findOneAndUpdate({ _id }, task, { new: true });
};

const remove = async (_id) => {
  return await Task.findOneAndDelete({ _id });
};

const getAll = async () => {
  return await Task.find({});
};

const getById = async (_id) => {
  return await Task.findOne({ _id });
};

module.exports = {
  create,
  update,
  remove,
  getAll,
  getById,
};
