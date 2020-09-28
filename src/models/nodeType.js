import { selectNode } from '../selectors';

const nodeType = (sequelize, DataTypes) => {
  const NodeType = sequelize.define('node_type', {
    nodeTypeName: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    description: {
      type: DataTypes.STRING,
    },
  }, {
    timestamps: false,
  });

  NodeType.associate = (models) => {
    NodeType.hasMany(selectNode(models));
  };

  return NodeType;
};

export default nodeType;
