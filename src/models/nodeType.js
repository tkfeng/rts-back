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
  });

  return NodeType;
};

export default nodeType;
