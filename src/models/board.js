import { selectNode } from '../selectors';

const board = (sequelize, DataTypes) => {
  const Board = sequelize.define('board', {
    boardName: {
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
  }, {
    timestamps: false,
  });

  Board.associate = (models) => {
    Board.hasMany(selectNode(models));
  };
  return Board;
};

export default board;
