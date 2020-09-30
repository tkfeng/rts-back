import {
  selectBoard,
  selectNodeType,
} from '../selectors';

import createBoardData from './createBoardData';
import nodeTypeInput from '../../data/nodeType.json';

export default async (models) => {
  await selectBoard(models).create(
    {
      name: 'b1',
      display: 'First ever Reach The Sheep board.',
    },
  );

  await selectBoard(models).create(
    {
      name: 'b2',
      display: 'Second Reach The Sheep board.',
    },
  );

  await Promise.all(nodeTypeInput.map(async (nt) => {
    await selectNodeType(models).create(nt);
  }));

  // const n2 = await selectNode(models).create({
  //   name: 'n2',
  //   display: 'Second node',
  //   nodeTypeId: nodeTypeBasic.id,
  //   boardId: b1.id,
  // });

  // await selectEdge(models).create({
  //   name: 'e1',
  //   boardId: b1.id,
  //   fromNodeId: n1.id,
  //   toNodeId: n2.id,
  // });
  await createBoardData(models);
  console.log('\n===Seeding complete!===');
};
