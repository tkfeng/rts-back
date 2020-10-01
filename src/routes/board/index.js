import { Router } from 'express';
import {
  selectBoardAll,
  selectBoardById,
  selectEdgeByBoardId,
  selectNodeByBoardId,
  selectNodeType,
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
  const { models } = req.context;
  const { boardId } = req.params;
  const board = await selectBoardById(
    models,
    boardId,
  );
  const node = await selectNodeByBoardId(models, boardId, [selectNodeType(models)]);
  const edge = await selectEdgeByBoardId(models, boardId);
  return res.send({
    ...board.dataValues,
    node,
    edge,
  });
});

export default router;
