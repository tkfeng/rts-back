import { DataTypes } from 'sequelize';
import { selectNode } from '../selectors';

const board = (sequelize) => {
  const Board = sequelize.define('board', {
    // UUID board and nodetypes and update foriegn key to boardName
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
