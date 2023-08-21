const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const LikeList = db.define('like_list', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  detail: {
    type: DataTypes.STRING,
    allowNull: true
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'user_id'
  }
});

module.exports = LikeList;
