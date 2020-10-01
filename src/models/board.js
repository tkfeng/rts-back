import { DataTypes } from 'sequelize';
import { selectEdge, selectNode } from '../selectors';

const board = (sequelize) => {
  const Board = sequelize.define('board', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    display: DataTypes.STRING,
  }, {
    timestamps: false,
  });

  Board.associate = (models) => {
    Board.hasMany(selectNode(models), { onDelete: 'CASCADE' });
    Board.hasMany(selectEdge(models), { onDelete: 'CASCADE' });
  };
  return Board;
};

export default board;
