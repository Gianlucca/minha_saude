exports = function (data) {
  const mongo = context.services.get('mongodb-atlas');
  const collection = mongo.db('minha-saude').collection('user');

  console.log(data);
  collection.updateOne(
    {_id: data.id},
    {
      $set: {
        name: data.name,
        birth: data.birth,
        hasHealthInsurance: data.hasHealthInsurance,
      },
    },
  );
};
