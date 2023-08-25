const { LikeListServices } = require('../services');

const getLikeList = async (req, res, next) => {
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

const getAllLikeList = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log('respondo')
    const result = await LikeListServices.getAllLikeList(id);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al obtener los usuarios',
      errorContent: error
    });
  }
};

module.exports = { getLikeList, getAllLikeList };
