import { Router } from 'express';
import { selectUserModel, selectUserAll, selectUserById } from './selectors';

const router = Router();

router.get('/', async (req, res) => {
  const users = await selectUserAll(req.context.models);
  return res.send(users);
});

router.get('/:userId', async (req, res) => {
  const user = await selectUserById(
    req.context.models,
    req.params.userId,
  );

  return res.send(user);
});

export {
  selectUserModel,
  selectUserAll,
  selectUserById,
};
export default router;
