import { selectBoard, selectNodeType } from '../selectors';

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
    node_type_id: {
      type: DataTypes.INTEGER,
    },
    board_id: {
      type: DataTypes.INTEGER,
    },
  }, { underscored: true });

  Node.associate = (models) => {
    Node.belongsTo(selectBoard(models), {
      foreignKey: {
        name: 'board_id',
        allowNull: false,
      },
    });
    Node.belongsTo(selectNodeType(models), {
      foreignKey: {
        name: 'node_type_id',
        allowNull: false,
      },
    });
  };

  return Node;
};

export default node;
