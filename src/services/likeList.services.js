const { LikeList } = require('../models');

class LikeListServices {
  static async createLikeList({ title, detail, userId }) {
    try {
      if (!title && !userId) throw 'Se espera un objeto con: title, userId';
      const result = await LikeList.create({ title, detail, userId });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getLikeList(id) {
    try {
    } catch (error) {
      throw error;
    }
  }
  static async getAllLikeList(userId) {
    try {
      const result = await LikeList.findAll({
        where: { userId },
        attributes: {
          exclude: ['userId', 'user_id', 'createdAt', 'updatedAt']
        },
        order: [['id', 'DESC']]
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async updateLikeList(id, body) {
    try {
    } catch (error) {
      throw error;
    }
  }
  static async deleteLikeList(id) {
    try {
      await LikeList.destroy({
        where: { id }
      });
      return { message: 'Elemento eliminado' };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = LikeListServices;
