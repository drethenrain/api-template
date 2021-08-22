import { v4 as uuid } from 'uuid';
import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

import { BaseSchema } from '../types/schema';

interface IUser extends BaseSchema {
  username: string;
  email: string;
  password: string;
}

const schema = new Schema<Document & IUser>(
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
  const hashed = await bcrypt.hash(this.password, 10);
  this.password = hashed;
  next();
});

const User = model('User', schema);

export default User;
