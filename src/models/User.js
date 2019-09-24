const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  email: String,
  password: String
},{
  timestamps: true
});

UserSchema.pre('save', async function (next) {
  if (this.password) {
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash
  }
  return next()
})

mongoose.model('User', UserSchema);