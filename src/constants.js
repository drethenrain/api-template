require('dotenv').config();

const port = process.env.PORT || 3000;
const mongouri = process.env.MONGO_URI;

module.exports = {
  port,
  mongouri,
};
