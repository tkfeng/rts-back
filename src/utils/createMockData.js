import {
  selectBoard,
  selectEdge,
  selectNode,
  selectNodeType,
} from '../selectors';

export default async (models) => {
  const b1 = await selectBoard(models).create(
    {
      boardName: 'b1',
      display: 'First ever Reach The Sheep board.',
    },
  );

  await selectBoard(models).create(
    {
      boardName: 'b2',
      display: 'Second Reach The Sheep board.',
    },
  );

  const nodeTypeBasic = await selectNodeType(models).create(
    {
      nodeTypeName: 'BASIC',
      description: 'Basic node type, the user lands there and nothing happens.',
    },
  );

  await selectNodeType(models).create(
    {
      nodeTypeName: 'ROLL',
      description: 'When user lands there, roll again.',
    },
  );

  const n1 = await selectNode(models).create({
    nodeName: 'n1',
    display: 'First node',
    nodeTypeId: nodeTypeBasic.id,
    boardId: b1.id,
  });

  const n2 = await selectNode(models).create({
    nodeName: 'n2',
    display: 'Second node',
    nodeTypeId: nodeTypeBasic.id,
    boardId: b1.id,
  });

  await selectEdge(models).create({
    boardId: b1.id,
    fromNodeId: n1.id,
    toNodeId: n2.id,
  });

  console.log('\n===Seeding complete!===');
};
