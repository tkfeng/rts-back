import {
  selectNodeType,
} from '../selectors';

import createBoardData from './createBoardData';
import nodeTypeInput from '../../data/nodeType.json';

export default async (models) => {
  await Promise.all(nodeTypeInput.map(async (nodeType) => {
    await selectNodeType(models).create(nodeType);
  }));

  await createBoardData(models);

  console.log('\n===Seeding complete!===');
};
