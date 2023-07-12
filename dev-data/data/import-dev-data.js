const fs = require('fs');
const mongoose = require('mongoose');
const Tour = require('../../models/tourModel');

const uri =
  'mongodb+srv://mohamed:K1EfdRUpDBhXF5bw@mohamed.5ocdbqd.mongodb.net/?authMechanism=SCRAM-SHA-1&authSource=mohamed';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to the database successfully');
});

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8')
);

const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('Imported Data Successfully!');
  } catch (err) {
    console.log('Error 💥', err);
  }
};

const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('Delete Data Successfully!');
    process.exit();
  } catch (err) {
    console.log('Error 💥', err);
  }
};

console.log(process.argv);
if (process.argv[2] == '--import') {
  importData();
} else if (process.argv[2] == '--delete') {
  deleteData();
}
