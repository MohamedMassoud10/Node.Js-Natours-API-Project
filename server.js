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

const uri = 'mongodb://127.0.0.1:27017/natours-text';
mongoose.connect(uri);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
  console.log('connected successfully');
});

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'A tour must have a name'],
    uniq: true,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    require: [true, 'A tour must have a price'],
  },
});
const tour = mongoose.model('Tour', tourSchema);

const app = require('./app');
const port = 3000;
app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
