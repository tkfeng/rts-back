import { Router } from 'express';
import {
  getBoardByBoardId,
  getBoards,
  postBoard,
  deleteBoard,
} from './board.controller';

const router = Router();

router.get('/', getBoards);
router.get('/:boardId', getBoardByBoardId);

router.post('/', postBoard);
router.delete('/:boardId', deleteBoard);

export default router;
