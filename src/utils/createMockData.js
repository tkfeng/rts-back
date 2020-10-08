import { selectNodeType } from '../api/module/board/nodeType/nodeType.selector';
import { createBoard } from '../api/module/board/board.service';

import nodeTypeInput from '../../data/nodeType.json';
import boardInput from '../../data/board.json';

export default async (models) => {
  await Promise.all(nodeTypeInput.map(async (nodeType) => {
    await selectNodeType(models).create(nodeType);
  }));

  await createBoard(models, boardInput);

  console.log('\n===Seeding complete!===');
};
