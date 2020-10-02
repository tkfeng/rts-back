import { Router } from 'express';
import {
  selectBoard,
  selectBoardAll,
} from '../../selectors';
import getBoardByBoardId from './getBoardByBoardId';

const router = Router();

router.get('/', async (req, res) => {
  const { models } = req.context;
  const result = {
    board: await selectBoardAll(models),
  };

  return res.send(result);
});

router.get('/:boardId', getBoardByBoardId);

router.post('/', async (req, res) => {
  const { models } = req.context;
  const { name, display } = req.body;
  const board = await selectBoard(models).create({
    name,
    display,
  });

  return res.send(board);
});

export default router;
