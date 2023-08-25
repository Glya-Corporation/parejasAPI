const { Sequelize } = require('sequelize');
const { Relations, Users } = require('../models');

class RelationServices {
  static async createRelation(body) {
    try {
      if (!body) throw 'Se espera un objeto con los datos de la relación';
      const relation = await Relations.create(body);
      const result = await Relations.findByPk(relation.id, {
        attributes: ['id', 'unionDate'],
        include: [
          {
            model: Users,
            as: 'userHostR',
            attributes: {
              exclude: ['password', 'createdAt', 'updatedAt']
            }
          },
          {
            model: Users,
            as: 'userGuestR',
            attributes: {
              exclude: ['password', 'createdAt', 'updatedAt']
            }
          }
        ]
      });
      const socketId = await Users.findByPk(body.userGuest, { attributes: ['socketId'] });
      return { socketId, result };
    } catch (error) {
      throw error;
    }
  }
  static async getRelation(id) {
    try {
      const result = await Relations.findOne({
        where: {
          [Sequelize.Op.or]: [{ userGuest: id }, { userHost: id }]
        },
        attributes: ['id', 'unionDate'],
        include: [
          {
            model: Users,
            as: 'userHostR',
            attributes: {
              exclude: ['password', 'createdAt', 'updatedAt']
            }
          },
          {
            model: Users,
            as: 'userGuestR',
            attributes: {
              exclude: ['password', 'createdAt', 'updatedAt']
            }
          }
        ]
      });

      return result;
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
