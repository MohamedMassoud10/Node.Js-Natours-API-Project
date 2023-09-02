const dotenv = require('dotenv');
dotenv.config();

const app = require('./app');
const mongoose = require('mongoose');

const uri =
  'mongodb+srv://mohamed:K1EfdRUpDBhXF5bw@mohamed.5ocdbqd.mongodb.net/?authMechanism=SCRAM-SHA-1&authSource=mohamed';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to the database successfully');
});

const port = 3000;
app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
