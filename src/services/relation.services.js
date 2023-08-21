const { Relations } = require('../models');

class RelationServices {
  static async createRelation(body) {
    try {
      if (!body) throw 'Se espera un objeto con los datos de la relación';
      const result = await Relations.create(body);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getRelation(id) {
    try {
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
