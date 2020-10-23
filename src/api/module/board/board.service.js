import { selectBoard, selectBoardAll, selectBoardById } from './board.selector';
import { selectEdgeByBoardId } from './edge/edge.selector';
import { selectNodeByBoardId } from './node/node.selector';
import { selectNodeType } from './nodeType/nodeType.selector';

import createNode from './node/node.service';
import createEdge from './edge/edge.service';

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

export const readBoardByBoardId = async (models, boardId) => {
  const board = await selectBoardById(
    models,
    boardId,
  );

  if (!board) {
    throw new Error(`boardId does not exist ${boardId}`);
  }

  const node = await selectNodeByBoardId(models, boardId, [selectNodeType(models)]);
  const edge = await selectEdgeByBoardId(models, boardId);

  return {
    ...board.dataValues,
    node,
    edge,
  };
};

export const readBoards = async (models) => {
  const result = {
    board: await selectBoardAll(models),
  };
  return result;
};

export const destroyBoard = async (models, id) => {
  await selectBoard(models).destroy({
    where: { id },
  });
};
