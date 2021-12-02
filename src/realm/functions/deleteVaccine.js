exports = function (data) {
  console.log(JSON.stringify(data));

  const mongodb = context.services.get('mongodb-atlas');
  const vaccines = mongodb.db('minha-saude').collection('vaccines');

  console.log(data.id);

  vaccines
    .deleteOne({_id: data.id})
    .then(result => console.log(`Successfully deleted item`))
    .catch(err => console.error(`Failed to delete item: ${err}`));
};
