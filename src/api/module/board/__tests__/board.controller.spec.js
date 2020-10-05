import SequelizeMock from 'sequelize-mock';
import { readBoardByBoardId } from '../board.controller';

const createMock = () => {
  const dbMock = new SequelizeMock();
  const BoardMock = dbMock.define('board');
  BoardMock.findByPk = (id, opts) => BoardMock.findById(id, opts);

  const NodeMock = dbMock.define('node');
  NodeMock.findByPk = (id, opts) => NodeMock.findById(id, opts);

  const EdgeMock = dbMock.define('edge');
  EdgeMock.findByPk = (id, opts) => EdgeMock.findById(id, opts);

  const models = new Map([
    ['Board', BoardMock],
    ['Node', NodeMock],
    ['Edge', EdgeMock],
  ]);

  return models;
};

describe('readBoardByBoardId', () => {
  test('it returns an object', async () => {
    // Arrange
    const boardMock = { id: 3 };
    const nodeMock = [{ id: 1 }, { id: 2 }];
    const edgeMock = [{ id: 1 }, { id: 2 }, { id: 3 }];

    // Act
    const models = createMock();
    models.get('Board').$queueResult(models.get('Board').build(boardMock));
    models.get('Node').$queueResult(models.get('Node').bulkCreate(nodeMock));
    models.get('Edge').$queueResult(models.get('Edge').bulkCreate(edgeMock));

    const result = await readBoardByBoardId(models, 1);

    // Assert
    const {
      id,
      node,
      edge,
    } = result;
    expect(id).toEqual(boardMock.id);
    expect(node.length).toEqual(nodeMock.length);
    expect(edge.length).toEqual(edgeMock.length);
  });
});
