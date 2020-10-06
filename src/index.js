import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import initApiRoutes from './api/module';
import models, { sequelize } from './api/module/models';
import createMockData from './utils/createMockData';

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));
app.get('/', (req, res) => res.send('Received a GET HTTP method'));

app.use(async (req, res, next) => {
  req.context = {
    models,
  };
  next();
});

initApiRoutes(app);

app.get('*', (req, res, next) => {
  const error = new Error(
    `${req.ip} tried to access ${req.originalUrl}`,
  );

  error.statusCode = 301;

  next(error);
});

// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
  // eslint-disable-next-line no-param-reassign
  if (!error.statusCode) error.statusCode = 500;

  if (error.statusCode === 301) {
    return res.status(301).redirect('/not-found');
  }

  return res
    .status(error.statusCode)
    .json({ error: error.toString() });
});

const eraseDatabaseOnSync = true;

sequelize.sync({ force: eraseDatabaseOnSync }).then(() => {
  if (eraseDatabaseOnSync) {
    createMockData(models);
  }
  app.listen(process.env.PORT, () => {
    console.log(`\n===RTS listening on port ${process.env.PORT}!===`);
  });
});
