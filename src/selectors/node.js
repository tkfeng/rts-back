export const selectNode = (models) => models.get('Node');

export const selectNodeAll = async (models) => {
  const result = await selectNode(models).findAll();
  return result;
};

export const selectNodeById = async (models, id) => {
  const result = await selectNode(models).findByPk(id);
  return result;
};
