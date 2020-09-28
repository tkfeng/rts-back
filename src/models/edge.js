import { DataTypes } from 'sequelize';
import { selectBoard, selectNode } from '../selectors';

const edge = (sequelize) => {
  const Edge = sequelize.define('edge', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
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
