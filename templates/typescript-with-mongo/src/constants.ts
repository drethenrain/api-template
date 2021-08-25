import 'dotenv/config';

const { MONGO_URI } = process.env;

const PORT = process.env.PORT || 3000;

export { PORT, MONGO_URI };
