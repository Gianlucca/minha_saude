exports = function (authEvent) {
  const user = authEvent.user;
  console.log('authEvent.user ', JSON.stringify(user));
  const mongodb = context.services.get('mongodb-atlas');
  const users = mongodb.db('minha-saude').collection('user');

  var newUser = {
    uid: user.id,
    email: user.data.email,
    name: user.data.name,
    birth: user.data.birth,
  };

  users.updateOne({_id: user.id}, newUser, {upsert: true});
};
