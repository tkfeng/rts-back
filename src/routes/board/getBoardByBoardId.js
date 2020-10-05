import {
  selectBoardById,
  selectEdgeByBoardId,
  selectNodeByBoardId,
  selectNodeType,
} from '../../selectors';
import { UnprocessableEntityError } from '../../errors';

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

const getBoardByBoardId = async (req, res, next) => {
  const result = await readBoardByBoardId(
    req.context.models,
    req.params.boardId,
  ).catch((error) => next(new UnprocessableEntityError(error)));

  return res.send(result);
};

export default getBoardByBoardId;
