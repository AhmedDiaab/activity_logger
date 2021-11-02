const User = require("./model");

const create = async (user) => {
  let _User = new User(user);
  return await _User.save();
};

const update = async (_id, user) => {
  return await User.findOneAndUpdate({ _id }, user, { new: true });
};

const remove = async (_id) => {
  return await User.findOneAndDelete({ _id });
};

const getAll = async () => {
  return await User.find({});
};

const getById = async (_id) => {
  return await User.findOne({ _id });
};

module.exports = {
  create,
  update,
  remove,
  getAll,
  getById,
};
