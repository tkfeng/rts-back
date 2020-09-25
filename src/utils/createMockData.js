export default async (models) => {
  await models.get('Board').create(
    {
      board_name: 'b1',
      display: 'First ever Reach The Sheep board.',
    },
  );

  await models.get('Board').create(
    {
      board_name: 'b2',
      display: 'Second Reach The Sheep board.',
    },
  );

  await models.get('NodeType').create(
    {
      node_type_name: 'BASIC',
      description: 'Basic node type, the user lands there and nothing happens.',
    },
  );
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
