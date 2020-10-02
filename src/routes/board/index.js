import { Router } from 'express';
import {
  selectBoardAll,
} from '../../selectors';
import getBoardByBoardId from './getBoardByBoardId';
import postBoard from './postBoard';
// import createBoardData from '../../utils/createBoardData';

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
