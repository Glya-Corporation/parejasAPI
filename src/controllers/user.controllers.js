const { UserServices } = require('../services');

const createUser = async (req, res, next) => {
  try {
    const user = req.body;
    const result = await UserServices.createUser(user);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al crear',
      errorContent: error
    });
  }
};

const getUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await UserServices.getUser(id);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al obtener los usuario',
      errorContent: error
    });
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const result = await UserServices.updateUser(id, body);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al actualizar',
      errorContent: error
    });
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await UserServices.deleteUser(id);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al eliminar',
      errorContent: error
    });
  }
};

module.exports = { createUser, getUser, updateUser, deleteUser };
