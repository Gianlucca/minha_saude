exports = function (data) {
  console.log('data ', JSON.stringify(data));

  const mongodb = context.services.get('mongodb-atlas');
  const doctors = mongodb.db('minha-saude').collection('doctors');

  const newItem = {
    _partition: data.id,
    owner_id: data.id,
    _uid: data.id,
    name: data.name,
    phone: data.phone,
    email: data.email,
    speciality: data.speciality,
    crm: data.crm,
    address: data.address,
    clinic_name: data.clinicName,
    details: data.details,
  };

  console.log(JSON.stringify(newItem));

  doctors
    .insertOne(newItem)
    .then(result =>
      console.log(`Successfully inserted item with _id: ${result.insertedId}`),
    )
    .catch(err => console.error(`Failed to insert item: ${err}`));
};
