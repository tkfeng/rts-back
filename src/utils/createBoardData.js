import { selectBoard, selectNode, selectNodeTypeByName } from '../selectors';
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

const createNode = async (models, graphDict, boardId) => (
  [...graphDict.values()].map(async (node) => {
    const {
      name,
      type,
    } = node;
    const nodeType = await selectNodeTypeByName(models, type);
    // console.log({ nodeType });
    return selectNode(models).create({
      name,
      nodeTypeId: nodeType.id,
      boardId,
    });
  })
);

/**
 * @param input: input object imported from json file.
 * {
 *  name: 'board1',
 *  display: 'First board created from json.',
 *  graph: {
 *    n1: { name: 'n1', type: 'START', to: ['n2'] },
 *    n2: { name: 'n2', type: 'BASIC', to: ['n3'] },
 *    n3: { name: 'n3', type: 'END', to: null },
 *  }
 * }
 * @returns {board, node, edge } Each value represents a sequelized model instance.
 * {
 *  board: Board
 *  node: new Map([
 *    ['n1', { name: 'n1', nodeTypeId: ref(START), boardId: ref(board1)}],
 *    ['n2', { name: 'n2', nodeTypeId: ref(BASIC), boardId: ref(board1)}],
 *    ['n3', { name: 'n3', nodeTypeId: ref(END), boardId: ref(board1)}]
 *  ]),
 *  edge: new Map([
 *    ['e1', { name: 'e1', fromNodeId: ref(n1), toNodeId: ref(n2)}, ref(board1)],
 *    ['e2', { name: 'e2', fromNodeId: ref(n2), toNodeId: ref(n3)}, ref(board1)],
 *  ]),
 * }
 */
const createBoardData = async (models, input) => {
  const board = await createBoard(models, input);
  const graphDict = new Map(Object.entries(input.graph));
  const node = await createNode(models, graphDict, board.id);

  return {
    board,
    node,
  };
};

export default async (models) => {
  await createBoardData(models, boardInput);
};
