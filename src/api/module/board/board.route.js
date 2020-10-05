import { Router } from 'express';
import {
  selectBoardAll,
} from './board.selector';
import { getBoardByBoardId, postBoard } from './board.controller';

const router = Router();

router.get('/', async (req, res) => {
  const { models } = req.context;
  const result = {
    board: await selectBoardAll(models),
  };

  return res.send(result);
});

router.get('/:boardId', getBoardByBoardId);

router.post('/', postBoard);

export default router;
