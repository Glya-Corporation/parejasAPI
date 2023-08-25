const { DontLikeListServices } = require('../services');

const getDontLikeList = async (req, res, next) => {
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

const getAllDontLikeList = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await DontLikeListServices.getAllDontLikeList(id);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al obtener los usuarios',
      errorContent: error
    });
  }
};

module.exports = { getDontLikeList, getAllDontLikeList };
