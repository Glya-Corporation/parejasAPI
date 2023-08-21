const { createUser, getUser, updateUser, deleteUser } = require('./user.controllers.js');
const { createRelation, getRelation, updateRelation, deleteRelation } = require('./relation.controllers.js');

module.exports = { 
  createUser, getUser, updateUser, deleteUser,
  createRelation, getRelation, updateRelation, deleteRelation
};
