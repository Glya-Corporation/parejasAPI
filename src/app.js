const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const db = require('./utils/database');
const hendleError = require('./middlewares/error.middleware');
const initModels = require('./models/initModels');

const { UserRoutes, AuthRoutes, RelationRoutes } = require('./routes');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

db.authenticate()
  .then(() => console.log('Authenticate complete'))
  .catch(error => console.log(error));

db.sync({ force: false })
  .then(() => console.log('Synchronized database'))
  .catch(error => console.log(error));

initModels();

app.get('/', (req, res) => {
  res.status(200).json({
    name: 'Parejas BackEnd'
  });
});

app.use('/api/v1', UserRoutes);
app.use('/api/v1', AuthRoutes);
app.use('/api/v1', RelationRoutes);

app.use(hendleError);

module.exports = app;
