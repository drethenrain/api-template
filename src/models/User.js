const { v4: uuid } = require('uuid');
const { Schema, model } = require('mongoose');

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

module.exports = model('User', schema);
