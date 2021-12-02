exports = function (data) {
  console.log(JSON.stringify(data));

  const mongodb = context.services.get('mongodb-atlas');
  const documents = mongodb.db('minha-saude').collection('documents');

  console.log(data.id);

  documents
    .deleteOne({_id: data.id})
    .then(result => console.log(`Successfully deleted item`))
    .catch(err => console.error(`Failed to delete item: ${err}`));
};
