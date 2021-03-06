import { DataTypes } from 'sequelize';
import { selectNode } from '../node/node.selector';

const nodeType = (sequelize) => {
  const NodeType = sequelize.define('nodeType', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    description: DataTypes.STRING,
  }, {
    timestamps: false,
  });

  NodeType.associate = (models) => {
    NodeType.hasMany(selectNode(models));
  };

  return NodeType;
};

export default nodeType;
