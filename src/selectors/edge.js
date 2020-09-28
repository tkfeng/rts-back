export const selectEdge = (models) => models.get('Edge');

export const selectEdgeAll = async (models) => {
  const result = await selectEdge(models).findAll();
  return result;
};

export const selectEdgeById = async (models, id) => {
  const result = await selectEdge(models).findByPk(id);
  return result;
};
