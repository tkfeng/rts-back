export const selectBoard = (models) => models.get('Board');

export const selectBoardAll = async (models) => {
  const result = await selectBoard(models).findAll();
  return result;
};

export const selectBoardById = async (models, id) => {
  const result = await selectBoard(models).findByPk(id);
  return result;
};
