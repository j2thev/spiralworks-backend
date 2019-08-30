import mongoose from 'mongoose';
import beautifyUnique from 'mongoose-beautiful-unique-validation';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: 'Email "{VALUE}" already exists'
  },
  phoneNo: {
    type: String,
    required: true,
    unique: 'Phone Number "{VALUE}" already exists'
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

userSchema.plugin(beautifyUnique);

userSchema.statics.search = function () {
  return this.find({});
}

const User = mongoose.model('User', userSchema);

export default User;
