export const selectUserModel = (models) => {
  return models.get('User');
};
export const selectUserAll = async (models) => {
  return await selectUserModel(models).findAll();
};
export const selectUserById = async (models, userId) => {
  return await selectUserModel(models).findByPk(userId);
};
