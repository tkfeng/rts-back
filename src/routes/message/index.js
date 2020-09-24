import { Router } from 'express';
import { selectMessageModel, selectMessageAll, selectMessageById } from './selectors';
import BadRequestError from '../../utils/errors';

const router = Router();

router.get('/', async (req, res) => {
  const messages = await selectMessageAll(req.context.models);
  return res.send(messages);
});

router.get('/:messageId', async (req, res) => {
  const message = await selectMessageById(
    req.context.models,
    req.params.messageId,
  );
  return res.send(message);
});

router.post('/', async (req, res, next) => {
  const message = await selectMessageModel(req.context.models).create({
    text: req.body.text,
    userId: req.context.me.id,
  }).catch((error) => (next(new BadRequestError(error))));

  return res.send(message);
});

router.delete('/:messageId', async (req, res) => {
  await selectMessageModel(req.context.models).destroy({
    where: { id: req.params.messageId },
  });

  return res.send(true);
});

export default router;
