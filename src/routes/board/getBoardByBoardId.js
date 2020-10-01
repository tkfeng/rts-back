import {
  selectBoardById,
  selectEdgeByBoardId,
  selectNodeByBoardId,
  selectNodeType,
} from '../../selectors';
import { UnprocessableEntityError } from '../../errors';

const getBoard = async (models, boardId) => {
  const board = await selectBoardById(
    models,
    boardId,
  );
  if (!board) {
    throw new Error(`boardId does not exist ${boardId}`);
  }

  return board;
};

const getBoardByBoardId = async (req, res, next) => {
  const { models } = req.context;
  const { boardId } = req.params;
  const board = await getBoard(
    models,
    boardId,
  ).catch((error) => next(new UnprocessableEntityError(error)));

  if (!board) {
    return null;
  }

  const node = await selectNodeByBoardId(models, boardId, [selectNodeType(models)]);
  const edge = await selectEdgeByBoardId(models, boardId);

  return res.send({
    ...board.dataValues,
    node,
    edge,
  });
};

export default async (req, res, next) => {
  const result = await getBoardByBoardId(req, res, next);
  return result;
};
