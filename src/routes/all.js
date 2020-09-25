import { Router } from 'express';
import {
  selectBoardAll,
  selectNodeAll,
  selectNodeTypeAll,
} from '../selectors';

const router = Router();

router.get('/', async (req, res) => {
  const { models } = req.context;
  const result = {
    board: await selectBoardAll(models),
    node: await selectNodeAll(models),
    nodeType: await selectNodeTypeAll(models),
  };

  return res.send(result);
});

export default router;
