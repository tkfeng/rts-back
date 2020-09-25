import { selectNode } from '../selectors';

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
  }, { underscored: true });

  Board.associate = (models) => {
    Board.hasMany(selectNode(models));
  };
  return Board;
};

export default board;
