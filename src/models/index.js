import mongoose from 'mongoose';
import User from './User';

const connectDb = () => {
  const uri = process.env.MONGO_URI;
  const port = process.env.MONGO_PORT;
  const database = process.env.MONGO_DATABASE;

  const mongoUri = `mongodb://${uri}:${port}/${database}`;
  const mongoOptions = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
  };

  return mongoose.connect(mongoUri, mongoOptions);
}

export {
  connectDb,
  User
}
