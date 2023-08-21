const { Users } = require('../models');

class UserServices {
  static async createUser(user) {
    try {
      if (!user) throw 'Se espera un objeto con los datos del usuario';
      const result = await Users.create(user);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getUser(id) {
    try {
      const result = await Users.findByPk(id, {
        attributes: {
          exclude: ['password', 'createdAt', 'updatedAt']
        }
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async updateUser(id, { password, newPassword }) {
    try {
      const result = await Users.findByPk(id);
    } catch (error) {
      throw error;
    }
  }
  static async updateSocketId(id, socketId) {
    try {
      await Users.update({ socketId }, { where: { id } });
      return { message: 'Actualizacion correcta' };
    } catch (error) {
      throw error;
    }
  }
  static async deleteUser(id) {
    try {
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;
