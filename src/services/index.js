const AuthServices = require('./auth.service.js');
const UserServices = require('./user.services.js');
const RelationServices = require('./relation.services.js');
const LikeListServices = require('./likeList.services.js');
const DontLikeListServices = require('./dontLikeList.services.js');

module.exports = { UserServices, AuthServices, RelationServices, LikeListServices, DontLikeListServices };
