import { selectNode } from '../selectors';

const nodeType = (sequelize, DataTypes) => {
  const NodeType = sequelize.define('node_type', {
    node_type_name: {
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
    underscored: true,
    timestamps: false,
  });

  NodeType.associate = (models) => {
    NodeType.hasMany(selectNode(models));
  };

  return NodeType;
};

export default nodeType;
