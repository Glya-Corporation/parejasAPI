const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const PendingsList = db.define('pendings_list', {
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
  pending: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('pending', 'finalized')
  }
});

module.exports = PendingsList;
