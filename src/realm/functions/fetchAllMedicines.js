exports = function (data) {
  console.log('data ', JSON.stringify(data));
  const mongodb = context.services.get('mongodb-atlas');
  const medicines = mongodb.db('minha-saude').collection('medicines');

  const query = {owner_id: {$eq: data}};
  const projection = {};

  return medicines.find(query);
};
