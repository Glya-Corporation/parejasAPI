const { Relations, Users } = require('../models');

class RelationServices {
  static async createRelation(body) {
    try {
      if (!body) throw 'Se espera un objeto con los datos de la relación';
      const result = await Relations.create(body);
      const socketId = await Users.findByPk(body.userGuest, { attributes: ['socketId'] });
      return { socketId, result };
    } catch (error) {
      throw error;
    }
  }
  static async getRelation(id) {
    try {
      const promisesAll = [
        Relations.findOne({
          where: { userHost: id },
          include: {
            model: Users,
            as: 'userGuestR',
            attributes: {
              exclude: ['password', 'createdAt', 'updatedAt']
            }
          }
        }),
        Relations.findOne({
          where: { userGuest: id },
          include: {
            model: Users,
            as: 'userHostR',
            attributes: {
              exclude: ['password', 'createdAt', 'updatedAt']
            }
          }
        })
      ];

      const [result1, result2] = await Promise.all(promisesAll);

      return result1 || result2;
    } catch (error) {
      throw error;
    }
  }
  static async updateRelation(id, body) {
    try {
    } catch (error) {
      throw error;
    }
  }
  static async deleteRelation(id) {
    try {
    } catch (error) {
      throw error;
    }
  }
}

module.exports = RelationServices;
