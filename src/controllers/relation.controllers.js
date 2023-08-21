const { RelationServices } = require('../services');

const createRelation = async (req, res, next) => {
  try {
    const body = req.body;
    const result = await RelationServices.createRelation(body);
    return result;
  } catch (error) {
    next({
      status: 400,
      message: 'Error al crear',
      errorContent: error
    });
  }
};

const getRelation = async (req, res, next) => {
  try {
    const id = req.params.id;

    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al obtener los usuarios',
      errorContent: error
    });
  }
};

const updateRelation = async (req, res, next) => {
  try {
    const id = req.params.id;
    const body = req.body;

    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al actualizar',
      errorContent: error
    });
  }
};

const deleteRelation = async (req, res, next) => {
  try {
    const id = req.params.id;

    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al eliminar',
      errorContent: error
    });
  }
};

module.exports = { createRelation, getRelation, updateRelation, deleteRelation };
