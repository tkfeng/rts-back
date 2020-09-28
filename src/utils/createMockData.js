import {
  selectBoard,
  selectNode,
  selectNodeType,
} from '../selectors';

export default async (models) => {
  await selectBoard(models).create(
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

  await selectNodeType(models).create(
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

  await selectNode(models).create({
    nodeName: 'n2',
    display: 'Second node',
    nodeTypeId: 1,
    boardId: 1,
  });
  // await models.get('User').create(
  //   {
  //     username: 'rwieruch',
  //     messages: [
  //       {
  //         text: 'Published the Road to learn React',
  //       },
  //     ],
  //   },
  //   {
  //     include: [models.get('Message')],
  //   },
  // );

  console.log('\n===Seeding complete!===');
};
