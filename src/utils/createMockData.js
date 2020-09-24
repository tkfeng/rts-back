export default async (models) => {
  await models.get('User').create(
    {
      username: 'rwieruch',
      messages: [
        {
          text: 'Published the Road to learn React',
        },
      ],
    },
    {
      include: [models.get('Message')],
    },
  );

  await models.get('User').create(
    {
      username: 'ddavids',
      messages: [
        {
          text: 'Happy to release ...',
        },
        {
          text: 'Published a complete ...',
        },
      ],
    },
    {
      include: [models.get('Message')],
    },
  );
  console.log('\n===Seeding complete!===');
};
