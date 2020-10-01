import {
  selectBoard,
  selectEdge,
  selectNode,
  selectNodeByName,
  selectNodeTypeByName,
} from '../selectors';

import boardInput from '../../data/board.json';

const createBoard = async (models, input) => {
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

const createNode = async (models, graphDict, boardId) => {
  const result = [];
  const graphValuesArray = [...graphDict.values()];
  console.log({ graphValuesArray });
  await Promise.all(graphValuesArray.map(async (node) => {
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

const createEdge = async (models, graphDict, boardId) => {
  const result = [];
  const graphValuesArray = [...graphDict.values()];
  // console.log({ graphValuesArray });
  await Promise.all(graphValuesArray.map(async (node) => {
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

const createBoardData = async (models, input) => {
  const board = await createBoard(models, input);
  const graphDict = new Map(Object.entries(input.graph));
  const node = await createNode(models, graphDict, board.id);
  const edge = await createEdge(models, graphDict, board.id);

  return {
    board,
    node,
    edge,
  };
};

export default async (models) => {
  await createBoardData(models, boardInput);
};
