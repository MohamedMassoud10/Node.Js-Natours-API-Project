const fs = require('fs');
const express = require('express');
const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//   res.status(200).json({ message: 'Hello from the server !', app: 'NATOURS' });
// });

// app.post('/', (req, res) => {
//   res.send('You can post anything on the server');
// });

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tours,
    },
  });
});

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
