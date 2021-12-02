exports = function (data) {
  console.log(JSON.stringify(data));

  const mongodb = context.services.get('mongodb-atlas');
  const appointments = mongodb.db('minha-saude').collection('appointments');

  console.log(data.id);

  appointments
    .deleteOne({_id: data.id})
    .then(result => console.log(`Successfully deleted item`))
    .catch(err => console.error(`Failed to delete item: ${err}`));
};
