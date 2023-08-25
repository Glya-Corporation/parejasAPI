const { DontLikeList } = require('../models');

class DontLikeListServices {
  static async createDontLikeList({ title, detail, userId }) {
    try {
      if (!title && !userId) throw 'Se espera un objeto con: title, userId';
      const result = await DontLikeList.create({ title, detail, userId });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getDontLikeList(id) {
    try {
    } catch (error) {
      throw error;
    }
  }
  static async getAllDontLikeList(userId) {
    try {
      const result = await DontLikeList.findAll({
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
  static async updateDontLikeList(id, body) {
    try {
    } catch (error) {
      throw error;
    }
  }
  static async deleteDontLikeList(id) {
    try {
      await DontLikeList.destroy({
        where: { id }
      });
      return { message: 'Elemento eliminado' };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = DontLikeListServices;
