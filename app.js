const express = require('express');
const app = express();
const morgan = require('morgan');
const AppError = require('./utils/appErrors');

const globalErrorHandler = require('./controllers/errorController');
const userRouter = require('./routes/userRoutes');
const tourRouter = require('./routes/tourRoutes');

// 1) MIDDLEWARE
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());

app.use(express.static('./public'));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// ROUTES
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {
  // const err = new Error(`We could not find ${req.originalUrl} on the server!`);
  // err.status = 'fail';
  // err.statusCode = 404;
  next(new AppError(`We could not find ${req.originalUrl} on the server!`));
});

app.use(globalErrorHandler);
//test2
module.exports = app;
