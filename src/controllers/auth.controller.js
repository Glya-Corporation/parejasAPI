const { AuthServices } = require('../services');

const login = async (req, res, next) => {
  try {
    const credentials = req.body;
    const result = await AuthServices.login(credentials);
    if (result) {
      const { email, password, id, fullname, username, phoneNumber } = result;
      const token = await AuthServices.generateToken({ username, password });
      const user = { id, username, fullname, email, phoneNumber };
      res.status(200).json({ user, token });
    } else {
      res.status(400).json({ message: 'Usuario o contraseña incorrecta' });
    }
  } catch (error) {
    next({
      status: 400,
      message: error.message,
      errorContent: error
    });
  }
};

module.exports = login;
