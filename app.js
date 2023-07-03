const fs = require('fs');
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;
const userRouter = require('./routes/userRoutes');
const tourRouter = require('./routes/tourRoutes');
// 1) MIDDLEWARE

app.use(morgan('dev'));
app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 2)ROUTES HANDLING

// 3) ROUTES

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

// 4) STARTING THE SERVER

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
