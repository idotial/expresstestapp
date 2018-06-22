import User from './../models/User'

var user = new User({
  name: 'cradmin',
  password: '123456',
})
// console.log(user);
user.save(console.log);

// User.find(console.log)
