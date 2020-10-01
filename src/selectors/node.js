import { selectBoard } from './board';
import { selectNodeType } from './nodeType';

export const selectNode = (models) => models.get('Node');

export const selectNodeAll = async (models) => {
  const result = await selectNode(models).findAll({
    include: [selectBoard(models), selectNodeType(models)],
  });
  return result;
};

export const selectNodeById = async (models, id) => {
  const result = await selectNode(models).findByPk(id);
  return result;
};

export const selectNodeByName = async (models, name) => {
  const result = await selectNode(models).findOne({
    where: { name },
  });
  return result;
};
