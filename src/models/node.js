const node = (sequelize, DataTypes) => {
  const Node = sequelize.define('node', {
    node_name: {
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
  }, { underscored: true });

  Node.associate = (models) => {
    Node.belongsTo(models.get('NodeType'));
  };

  return Node;
};

export default node;
