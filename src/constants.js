require('dotenv').config();

const { MONGO_URI, JWT_SECRET } = process.env;

const PORT = process.env.PORT || 3000;

module.exports = {
  PORT,
  MONGO_URI,
  JWT_SECRET,
};
