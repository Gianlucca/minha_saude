exports = function (data) {
  console.log(JSON.stringify(data));

  const mongodb = context.services.get('mongodb-atlas');
  const doctors = mongodb.db('minha-saude').collection('doctors');

  console.log(data.id);

  doctors
    .deleteOne({_id: data.id})
    .then(result => console.log(`Successfully deleted item`))
    .catch(err => console.error(`Failed to delete item: ${err}`));
};
