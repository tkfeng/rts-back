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

app.use(async (req, res, next) => {
  req.context = {
    models,
    me: await models.get('User').findByLogin('rwieruch'),
  };
  next();
});

app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);

const eraseDatabaseOnSync = true;

sequelize.sync({ force: eraseDatabaseOnSync }).then(() => {
  if (eraseDatabaseOnSync) {
    createUsersWithMessages();
  }
  app.listen(process.env.PORT, () =>
    console.log(`\n===Example app listening on port ${process.env.PORT}!===`),
  );
});

const createUsersWithMessages = async () => {
  await models.get('User').create(
    {
      username: 'rwieruch',
      messages: [
        {
          text: 'Published the Road to learn React',
        },
      ],
    },
    {
      include: [models.get('Message')],
    },
  );

  await models.get('User').create(
    {
      username: 'ddavids',
      messages: [
        {
          text: 'Happy to release ...',
        },
        {
          text: 'Published a complete ...',
        },
      ],
    },
    {
      include: [models.get('Message')],
    },
  );
  console.log(`\n===Seeding complete!===`);
};
