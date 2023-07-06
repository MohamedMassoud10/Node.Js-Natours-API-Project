const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true, // Add this line for the new MongoDB driver
  })
  .then((con) => {
    console.log(con.Connection);
    console.log('DB Connection Successful !');
  });

const app = require('./app');
const port = 3000;
app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
