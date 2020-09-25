import { Router } from 'express';
import {
  selectBoardAll,
  selectNodeTypeAll,
} from '../selectors';

const router = Router();

router.get('/', async (req, res) => {
  const { models } = req.context;
  const result = {
    board: await selectBoardAll(models),
    nodeType: await selectNodeTypeAll(models),
  };

  return res.send(result);
});

export default router;
