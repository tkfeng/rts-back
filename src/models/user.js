const user = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  User.associate = (models) => {
    User.hasMany(models.get('Message'), { onDelete: 'CASCADE' });
  };

  // Find user via username or email.
  User.findByLogin = async (login) => {
    let result = await User.findOne({
      where: { username: login },
    });

    if (!user) {
      result = await User.findOne({
        where: { email: login },
      });
    }

    return result;
  };

  return User;
};

export default user;
