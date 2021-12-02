exports = function (data) {
  console.log('data ', JSON.stringify(data));
  const mongodb = context.services.get('mongodb-atlas');
  const appointments = mongodb.db('minha-saude').collection('appointments');

  const query = {owner_id: {$eq: data}};
  const projection = {};

  return appointments.find(query);
};
