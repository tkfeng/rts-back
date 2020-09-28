import { Router } from 'express';
import {
  selectBoardAll,
  selectEdgeAll,
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
    edge: await selectEdgeAll(models),
  };

  return res.send(result);
});

export default router;
