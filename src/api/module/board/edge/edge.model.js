import { DataTypes } from 'sequelize';
import { selectBoard } from '../board.selector';
import { selectNode } from '../node/node.selector';

const edge = (sequelize) => {
  const Edge = sequelize.define('edge', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: DataTypes.STRING,
  }, {
    timestamps: false,
  });

  Edge.associate = (models) => {
    Edge.belongsTo(selectBoard(models), {
      foreignKey: {
        allowNull: false,
      },
    });
    Edge.belongsTo(selectNode(models), {
      foreignKey: 'fromNodeId',
    });
    Edge.belongsTo(selectNode(models), {
      foreignKey: 'toNodeId',
    });
  };

  return Edge;
};

export default edge;
