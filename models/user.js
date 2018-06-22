import mongoose from './../common/mongo'

const sscheme = mongoose.Schema({
  name: String,
  password: String,
  create_at: {
    type:Date,
    default: Date.now(),
  }
})
// console.log(sscheme);
// var User =
// console.log(User);
export default mongoose.model('user', sscheme)
