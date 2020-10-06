import { DataTypes } from 'sequelize';
import { selectBoard } from '../board.selector';
import { selectNodeType } from '../nodeType/nodeType.selector';

const node = (sequelize) => {
  const Node = sequelize.define('node', {
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

  Node.associate = (models) => {
    Node.belongsTo(selectBoard(models), {
      foreignKey: {
        allowNull: false,
      },
    });
    Node.belongsTo(selectNodeType(models), {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Node;
};

export default node;
