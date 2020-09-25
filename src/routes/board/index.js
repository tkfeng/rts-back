import { Router } from 'express';
import {
  selectBoardAll,
  selectBoardById,
} from '../../selectors';

const router = Router();

router.get('/', async (req, res) => {
  const { models } = req.context;
  const result = {
    board: await selectBoardAll(models),
  };

  return res.send(result);
});

router.get('/:boardId', async (req, res) => {
  const result = await selectBoardById(
    req.context.models,
    req.params.boardId,
  );
  return res.send(result);
});

export default router;
