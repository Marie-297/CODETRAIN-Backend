const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './.env' });

const DB = process.env.DATABASE.replace(
  '<db_password>',
  process.env.DB_PASSWORD
);

const connectDB = async () => {
  try {
    await mongoose.connect(DB);
    console.log('DB connection successful');
  } catch (err) {
    console.log('Error connecting to DB');
  }
};
connectDB();

const port = 5001;
 app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

