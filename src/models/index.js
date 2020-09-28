import Sequelize from 'sequelize';
import board from './board';
import nodeType from './nodeType';
import node from './node';

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: 'postgres',
  },
);

const models = new Map([
  ['Board', board(sequelize)],
  ['NodeType', nodeType(sequelize)],
  ['Node', node(sequelize)],
]);

models.forEach((model) => {
  if ('associate' in model) {
    model.associate(models);
  }
});

export { sequelize };
export default models;
