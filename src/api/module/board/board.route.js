import { Router } from 'express';
import { getBoardByBoardId, postBoard, getBoards } from './board.controller';

const router = Router();

router.get('/', getBoards);
router.get('/:boardId', getBoardByBoardId);

router.post('/', postBoard);

export default router;
