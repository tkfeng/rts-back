export const selectMessageModel = (models) => {
  return models.get('Message');
};
export const selectMessageAll = async (models) => {
  return await selectMessageModel(models).findAll();
};
export const selectMessageById = async (models, messageId) => {
  return await selectMessageModel(models).findByPk(messageId);
};