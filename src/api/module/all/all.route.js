import { Router } from 'express';
import { selectBoardAll } from '../board/board.selector';
import { selectEdgeAll } from '../board/edge/edge.selector';
import { selectNodeAll } from '../board/node/node.selector';
import { selectNodeTypeAll } from '../board/nodeType/nodeType.selector';

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
