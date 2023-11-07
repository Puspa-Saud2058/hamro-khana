const mongoose =require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
  phoneNumber: String, // String is shorthand for {type: String}
  email: String,
  address: String,
  password:String
});
const User = mongoose.model('Blog', userSchema);
module.exports=User
