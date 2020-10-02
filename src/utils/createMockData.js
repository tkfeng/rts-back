import {
  selectNodeType,
} from '../selectors';

import nodeTypeInput from '../../data/nodeType.json';
import boardInput from '../../data/board.json';
import { createBoard } from '../routes/board/postBoard';

export default async (models) => {
  await Promise.all(nodeTypeInput.map(async (nodeType) => {
    await selectNodeType(models).create(nodeType);
  }));

  await createBoard(models, boardInput);

  console.log('\n===Seeding complete!===');
};
