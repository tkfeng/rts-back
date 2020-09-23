import Sequelize, { DataTypes } from 'sequelize';
import user from './user';
import message from './message';
 
const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: 'postgres',
  },
);

const User = user(sequelize, DataTypes);
const Message = message(sequelize, DataTypes);
 
const models = new Map([
  ["User", user(sequelize, DataTypes)],
  ["Message", message(sequelize, DataTypes)],
]);

for (let key of models.keys()) {
  const model = models.get(key);
  if ('associate' in model) {
    model.associate(models);
  }
}
 
// Object.keys(models).forEach(key => {
//   if ('associate' in models[key]) {
//     models[key].associate(models);
//   }
// });
 
export { sequelize };
 
export default models;