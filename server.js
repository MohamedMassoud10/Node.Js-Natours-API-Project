const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

// mongoose
//   .connect(
//     'mongodb+srv://mohamed:<WONOSlwc5fu604gF>@natours.uweji0s.mongodb.net/?retryWrites=true&w=majority',
//     {
//       useNewUrlParser: true,
//     }
//   )
//   .then(() => {
//     console.log('here we go connected !');
//   });
const uri =
  'mongodb+srv://mohamed:K1EfdRUpDBhXF5bw@mohamed.5ocdbqd.mongodb.net/?authMechanism=SCRAM-SHA-1&authSource=mohamed';
mongoose.connect(uri);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
  console.log('connected successfully');
});

// testTour
//   .save()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     'ERORR 💥:', err;
//   });

const app = require('./app');
const port = 3000;
app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
