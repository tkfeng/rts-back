import Sequelize, { DataTypes } from 'sequelize';
import board from './board';

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: 'postgres',
  },
);

const models = new Map([
  ['Board', board(sequelize, DataTypes)],
]);

models.forEach((model) => {
  if ('associate' in model) {
    model.associate(models);
  }
});

export { sequelize };
export default models;
