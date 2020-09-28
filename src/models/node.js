import { selectBoard, selectNodeType } from '../selectors';

const node = (sequelize, DataTypes) => {
  const Node = sequelize.define('node', {
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
    // underscored: true
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
