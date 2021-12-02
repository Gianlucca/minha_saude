exports = function (data) {
  console.log('data ', JSON.stringify(data));
  const mongodb = context.services.get('mongodb-atlas');
  const documents = mongodb.db('minha-saude').collection('documents');

  const query = {owner_id: {$eq: data}};
  const projection = {};

  return documents.find(query);
};
