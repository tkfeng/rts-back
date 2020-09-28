import { DataTypes } from 'sequelize';
import { selectBoard, selectNodeType } from '../selectors';

const node = (sequelize) => {
  const Node = sequelize.define('node', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    nodeName: {
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
