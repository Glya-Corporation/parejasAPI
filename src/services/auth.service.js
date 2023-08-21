const { Users, Relations } = require('../models');
const { Op } = require('sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

class AuthServices {
  static async login(credentials) {
    try {
      const { username, password } = credentials;

      const attributesToSelect = ['id', 'username', 'fullname', 'email', 'phoneNumber', 'password'];
      const result = await Users.findOne({
        where: { username: { [Op.eq]: username } },
        attributes: attributesToSelect
      });

      if (result) {
        const isValid = bcrypt.compareSync(password, result.password);
        return isValid ? result : null; // Return null instead of boolean
      } else {
        return null;
      }
    } catch (error) {
      //console.error('Error in login:', error); // Handle errors more specifically
      throw error;
    }
  }

  static generateToken(user) {
    try {
      const token = jwt.sign(user, process.env.SECRET_KEY, {
        expiresIn: '24h',
        algorithm: 'HS512'
      });
      return token;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AuthServices;
