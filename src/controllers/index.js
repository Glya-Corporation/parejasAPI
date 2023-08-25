const { createUser, getUser, updateUser, deleteUser } = require('./user.controllers.js');
const { getRelation } = require('./relation.controllers.js');
const { getLikeList, getAllLikeList } = require('./likeList.controllers.js');
const { getDontLikeList, getAllDontLikeList } = require('./dontLikeList.controllers.js');

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  getRelation,
  getLikeList,
  getAllLikeList,
  getDontLikeList,
  getAllDontLikeList
};
