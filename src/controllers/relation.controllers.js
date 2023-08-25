const { RelationServices } = require('../services');

const getRelation = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await RelationServices.getRelation(id);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al obtener los usuarios',
      errorContent: error
    });
  }
};

module.exports = { getRelation };
