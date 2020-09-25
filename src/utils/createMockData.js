import {
  selectBoard,
  selectNode,
  selectNodeType,
} from '../selectors';

export default async (models) => {
  await selectBoard(models).create(
    {
      board_name: 'b1',
      display: 'First ever Reach The Sheep board.',
    },
  );

  await selectBoard(models).create(
    {
      board_name: 'b2',
      display: 'Second Reach The Sheep board.',
    },
  );

  await selectNodeType(models).create(
    {
      node_type_name: 'BASIC',
      description: 'Basic node type, the user lands there and nothing happens.',
    },
  );

  await selectNodeType(models).create(
    {
      node_type_name: 'ROLL',
      description: 'When user lands there, roll again.',
    },
  );

  await selectNode(models).create({
    node_name: 'n2',
    display: 'Second node',
    node_type_id: 1,
    board_id: 1,
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
