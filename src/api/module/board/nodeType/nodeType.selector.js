export const selectNodeType = (models) => models.get('NodeType');

export const selectNodeTypeAll = async (models) => {
  const result = await selectNodeType(models).findAll();
  return result;
};

export const selectNodeTypeById = async (models, id) => {
  const result = await selectNodeType(models).findByPk(id);
  return result;
};

export const selectNodeTypeByName = async (models, name) => {
  const result = await selectNodeType(models).findOne({
    where: { name },
  });
  return result;
};
