require('dotenv').config();
const mongoose = require('mongoose');

const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
  autoIndex: true,
  poolSize: 10,
  bufferMaxEntries: 0,
  keepAlive: true,
};

const {
  DB_HOST,
  DB_NAME,
  DB_PORT,
} = process.env;

const dbConnectionURL = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

const dbConnect = async () => {
  try {
    mongoose.connect(dbConnectionURL, options);
    console.log('data base ...');
  } catch (err) {
    console.error(err);
  }
};

module.exports = dbConnect;
