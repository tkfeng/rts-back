import { Router } from 'express';
import { selectUserById } from './user';

const router = Router();

router.get('/', async (req, res) => {
  const user = await selectUserById(
    req.context.models,
    req.context.me.id,
  );
  return res.send(user);
});

export default router;
