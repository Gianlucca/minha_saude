exports = function (data) {
  console.log('data ', JSON.stringify(data));
  const mongodb = context.services.get('mongodb-atlas');
  const doctors = mongodb.db('minha-saude').collection('doctors');

  const query = {owner_id: {$eq: data}};
  const projection = {};

  return doctors.find(query);
};
