import { v4 as uuidv4 } from 'uuid';
import { Router } from 'express';
import {selectMessageModel, selectMessageAll, selectMessageById} from './selectors';
 
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
 
router.post('/', async (req, res) => {
  const message = await selectMessageModel(req.context.models).create({
    text: req.body.text,
    userId: req.context.me.id,
  });
 
  return res.send(message);
});
 
router.delete('/:messageId', async (req, res) => {
  const result = await selectMessageModel(req.context.models).destroy({
    where: { id: req.params.messageId },
  });
 
  return res.send(true);
});
 
export default router;