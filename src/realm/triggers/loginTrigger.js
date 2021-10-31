exports = function (authEvent) {
  const user = authEvent.user;
  console.log('authEvent.user ', JSON.stringify(user));
  const mongodb = context.services.get('mongodb-atlas');
  const users = mongodb.db('minha-saude').collection('user');

  var newUser = {
    _partition: user.id,
    owner_id: user.id,
    email: user.data.email,
  };

  users.updateOne({_id: user.id}, {$set: newUser}, {upsert: true});
};
