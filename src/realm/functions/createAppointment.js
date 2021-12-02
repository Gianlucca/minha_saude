exports = function (data) {
  console.log('data ', JSON.stringify(data));

  const mongodb = context.services.get('mongodb-atlas');
  const appointments = mongodb.db('minha-saude').collection('appointments');

  const newItem = {
    _partition: data.id,
    owner_id: data.id,
    _uid: data.id,
    date: data.time,
    doctor_id: data.doctor.toString(),
    address: data.address,
    details: data.details,
  };

  console.log(newItem);

  appointments
    .insertOne(newItem)
    .then(result =>
      console.log(`Successfully inserted item with _id: ${result.insertedId}`),
    )
    .catch(err => console.error(`Failed to insert item: ${err}`));
};
