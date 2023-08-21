const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Relations = db.define('relations', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  userGuest: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'user_guest'
  },
  userHost: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'user_host'
  },
  unionDate: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'union_date'
  }
});

module.exports = Relations;
