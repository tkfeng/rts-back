export const selectNode = (models) => models.get('Node');

export const selectNodeAll = async (models, include = []) => {
  const result = await selectNode(models).findAll({
    include,
  });
  return result;
};

/**
 * Queries all nodes with a given boardId.
 * @param {Object} models Models object.
 * @param {UUID} boardId UUID of the a board instance.
 */
export const selectNodeByBoardId = async (models, boardId, include = []) => {
  const result = await selectNode(models).findAll({
    where: { boardId },
    include,
  });
  return result;
};

export const selectNodeById = async (models, id, include = []) => {
  const result = await selectNode(models).findByPk(id, { include });
  return result;
};

export const selectNodeByName = async (models, name, include = []) => {
  const result = await selectNode(models).findOne({
    where: { name },
    include,
  });
  return result;
};
