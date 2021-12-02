exports = function (data) {
  console.log('data ', JSON.stringify(data));

  const mongodb = context.services.get('mongodb-atlas');
  const documents = mongodb.db('minha-saude').collection('documents');

  const newItem = {
    _partition: data.id,
    owner_id: data.id,
    _uid: data.id,
    file: data.file.base64,
    title: data.title,
    date: data.date,
    category: data.category,
    details: data.details,
  };

  console.log(newItem);

  documents
    .insertOne(newItem)
    .then(result =>
      console.log(`Successfully inserted item with _id: ${result.insertedId}`),
    )
    .catch(err => console.error(`Failed to insert item: ${err}`));
};
