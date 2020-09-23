import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import routes from './routes';
import models, { sequelize } from './models';

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  return res.send('Received a GET HTTP method');
});

app.use((req, res, next) => {
  req.context = {
    models,
    me: models.users[1],
  };
  next();
});

app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);

sequelize.sync({ force: true }).then(() => {
  app.listen(process.env.PORT, () =>
    console.log(`\n===Example app listening on port ${process.env.PORT}!===`),
  );
});