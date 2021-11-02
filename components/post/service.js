const Post = require("./model");

const create = async (post) => {
  let _Post = new Post(post);
  return await _Post.save();
};

const update = async (_id, post) => {
  return await Post.findOneAndUpdate({ _id }, post, { new: true });
};

const remove = async (_id) => {
  return await Post.findOneAndDelete({ _id });
};

const getAll = async () => {
  return await Post.find({});
};

const getById = async (_id) => {
  return await Post.findOne({ _id });
};

module.exports = {
  create,
  update,
  remove,
  getAll,
  getById,
};
