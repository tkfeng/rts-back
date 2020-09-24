export const selectMessageModel = (models) => models.get('Message');

export const selectMessageAll = async (models) => {
  const result = await selectMessageModel(models).findAll();
  return result;
};

export const selectMessageById = async (models, messageId) => {
  const result = await selectMessageModel(models).findByPk(messageId);
  return result;
};
