exports = function (data) {
  console.log('data ', JSON.stringify(data));

  const mongodb = context.services.get('mongodb-atlas');
  const vaccines = mongodb.db('minha-saude').collection('vaccines');

  const newItem = {
    _partition: data.id,
    owner_id: data.id,
    _uid: data.id,
    file: data.file.base64,
    name: data.name,
    date: data.date,
    batch: data.batch,
    address: data.address,
    details: data.details,
  };

  console.log(newItem);

  vaccines
    .insertOne(newItem)
    .then(result =>
      console.log(`Successfully inserted item with _id: ${result.insertedId}`),
    )
    .catch(err => console.error(`Failed to insert item: ${err}`));
};
