export const selectUserModel = (models) => models.get('User');
export const selectUserAll = async (models) => {
  const result = await selectUserModel(models).findAll();
  return result;
};

export const selectUserById = async (models, userId) => {
  const result = await selectUserModel(models).findByPk(userId);
  return result;
};
