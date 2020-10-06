import Sequelize from 'sequelize';
import board from './board/board.model';
import nodeType from './board/nodeType/nodeType.model';
import node from './board/node/node.model';
import edge from './board/edge/edge.model';

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
  ['Edge', edge(sequelize)],
]);

models.forEach((model) => {
  if ('associate' in model) {
    model.associate(models);
  }
});

export { sequelize };
export default models;
