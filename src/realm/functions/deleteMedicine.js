exports = function (data) {
  console.log(JSON.stringify(data));

  const mongodb = context.services.get('mongodb-atlas');
  const medicines = mongodb.db('minha-saude').collection('medicines');

  console.log(data.id);

  medicines
    .deleteOne({_id: data.id})
    .then(result => console.log(`Successfully deleted item`))
    .catch(err => console.error(`Failed to delete item: ${err}`));
};
