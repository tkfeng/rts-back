const board = (sequelize, DataTypes) => {
  const Board = sequelize.define('board', {
    board_name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    display: {
      type: DataTypes.STRING,
    },
  });

  return Board;
};

export default board;
