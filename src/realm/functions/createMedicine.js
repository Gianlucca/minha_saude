exports = function (data) {
  console.log('data ', JSON.stringify(data));

  const mongodb = context.services.get('mongodb-atlas');
  const medicines = mongodb.db('minha-saude').collection('medicines');

  const newItem = {
    _partition: data.id,
    owner_id: data.id,
    _uid: data.id,
    file: data.file.base64,
    name: data.name,
    dosage: data.dosage,
    exp_date: data.expDate,
    how_many_pills: data.howManyPills,
    details: data.details,
  };

  console.log(newItem);

  medicines
    .insertOne(newItem)
    .then(result =>
      console.log(`Successfully inserted item with _id: ${result.insertedId}`),
    )
    .catch(err => console.error(`Failed to insert item: ${err}`));
};
