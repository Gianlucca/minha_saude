exports = function (data) {
  console.log('data ', JSON.stringify(data));
  const mongodb = context.services.get('mongodb-atlas');
  const vaccines = mongodb.db('minha-saude').collection('vaccines');

  const query = {owner_id: {$eq: data}};
  const projection = {};

  return vaccines.find(query);
};
