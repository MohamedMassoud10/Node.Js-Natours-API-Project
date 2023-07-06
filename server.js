const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');
console.log(process.env);
const port = 27017;
app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
