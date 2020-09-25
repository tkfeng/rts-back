import { Router } from 'express';

const router = Router();

const selectBoard = (models) => models.get('Board');

const selectBoardAll = async (models) => {
  const boards = await selectBoard(models).findAll();
  const nodeTypes = await models.get('NodeType').findAll();
  return { boards, nodeTypes };
};

const selectBoardById = async (models, boardId) => {
  const result = await selectBoard(models).findByPk(boardId);
  return result;
};

router.get('/', async (req, res) => {
  const result = await selectBoardAll(req.context.models);
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
