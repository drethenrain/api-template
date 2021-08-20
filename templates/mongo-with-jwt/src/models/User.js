const { v4: uuid } = require('uuid');
const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const schema = new Schema(
  {
    _id: {
      type: String,
      default: uuid,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

schema.pre('save', async function hash(next) {
  const user = this;
  const hashed = await bcrypt.hash(user.password, 10);
  user.password = hashed;
  next();
});

module.exports = model('User', schema);
