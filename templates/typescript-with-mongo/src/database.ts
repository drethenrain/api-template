import mongoose from 'mongoose';

import { MONGO_URI } from './constants';

export const connect = () => {
  mongoose.Promise = global.Promise;

  mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });

  mongoose.connection
    .on('connected', () => console.log('[DATABASE] MongoDB Connected'))
    .on('error', err => console.log(err));
};
