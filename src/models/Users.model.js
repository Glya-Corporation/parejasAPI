const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

const Users = db.define(
  'users',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    fullname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.STRING,
      field: 'phone_number'
    },
    socketId: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'socket_id'
    }
  },
  {
    hooks: {
      beforeSave: async (user, options) => {
        if (user.changed('password')) {
          const salt = await bcrypt.genSalt(10);
          const hash = await bcrypt.hash(user.password, salt);
          user.password = hash;
        }
      }
    }
  }
);

module.exports = Users;
