import { createBoard, readBoardByBoardId, readBoards } from './board.service';
import { UnprocessableEntityError } from '../../../errors';

export const getBoardByBoardId = async (req, res, next) => {
  const result = await readBoardByBoardId(
    req.context.models,
    req.params.boardId,
  ).catch((error) => next(new UnprocessableEntityError(error)));

  return res.send(result);
};

export const getBoards = async (req, res) => {
  const { models } = req.context;
  const result = await readBoards(models);
  return res.send(result);
};

export const postBoard = async (req, res) => {
  const result = await createBoard(req.context.models, req.body);
  return res.send(result);
};
