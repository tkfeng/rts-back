import { Router } from 'express';
import {
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

export default router;
