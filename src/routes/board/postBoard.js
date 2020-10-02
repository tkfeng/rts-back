import {
  selectBoard,
  selectEdge,
  selectNode,
  selectNodeByName,
  selectNodeTypeByName,
} from '../../selectors';

const createBoardMeta = async (models, input) => {
  const {
    name,
    display,
  } = input;

  const result = await selectBoard(models).create({
    name,
    display,
  });
  return result;
};

const createNode = async (models, connections, boardId) => {
  const result = [];
  await Promise.all(connections.map(async (node) => {
    const {
      name,
      type,
    } = node;
    const nodeType = await selectNodeTypeByName(models, type);
    result.push(await selectNode(models).create({
      name,
      nodeTypeId: nodeType.id,
      boardId,
    }));
  }));

  return result;
};

const createEdge = async (models, connections, boardId) => {
  const result = [];
  await Promise.all(connections.map(async (node) => {
    const {
      name: fromNodeName,
      to: toNodeNames,
    } = node;
    const { id: fromNodeId } = await selectNodeByName(models, fromNodeName);
    await Promise.all(toNodeNames.map(async (toNodeName) => {
      const { id: toNodeId } = await selectNodeByName(models, toNodeName);
      const edge = await selectEdge(models).create({
        name: `${fromNodeName}->${toNodeName}`,
        fromNodeId,
        toNodeId,
        boardId,
      });
      result.push(edge);
    }));
  }));
  return result;
};

const createNodeAndEdge = async (models, connections, boardId) => {
  await createNode(models, connections, boardId);
  await createEdge(models, connections, boardId);
};

export const createBoard = async (models, input) => {
  const board = await createBoardMeta(models, input);
  const connections = Object.values(input.node);
  // Asynchronously createNodeAndEdge  without waiting.
  createNodeAndEdge(models, connections, board.id);

  return {
    board,
  };
};

const postBoard = async (req, res) => {
  const result = await createBoard(req.context.models, req.body);
  return res.send(result);
};

export default postBoard;
