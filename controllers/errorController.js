sendErrorDev = (req, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};
sendErrorProd = (req, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    console.log('ERORR', err);

    res.status(500).json({
      status: 'error',
      message: 'Something went very wrong !',
    });
  }
};

module.exports = (err, req, res, next) => {
  console.log(err.stack);
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(req, res);
  } else if (process.env.NODE_ENV === 'production') {
    sendErrorProd(req, res);
  }
};
