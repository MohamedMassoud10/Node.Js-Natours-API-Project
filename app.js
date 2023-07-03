const fs = require('fs');
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

// 1) MIDDLEWARE

app.use(morgan('dev'));
app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

const users = JSON.parse(fs.readFileSync(`./dev-data/data/users.json`));
// 2)ROUTES HANDLING

const getAllTours = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({
    status: 'success',
    data: {
      tours,
    },
  });
};
const getTour = (req, res) => {
  const id = req.params.id * 1;

  if (id > tours.length) {
    return res.status(404).json({
      status: 'failed',
      message: 'not found',
    });
  }

  const tour = tours.find((ele) => ele.id === id);

  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
};

const createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );

  res.send('Done');
};

const updateTour = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'failed',
      message: 'not found',
    });
  }
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here . . .',
    },
  });
};
const deleteTour = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'failed',
      message: 'not found',
    });
  }
  res.status(204).json({
    status: 'success',
    data: null,
  });
};

const getAllUsers = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'this rout is not define yet',
  });
};

const createUsers = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'this rout is not define yet',
  });
};

const getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'this rout is not define yet',
  });
};
const updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'this rout is not define yet',
  });
};
const deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'this rout is not define yet',
  });
};

// 3) ROUTES

const tourRouter = express.Router();
const userRouter = express.Router();

tourRouter.route('/').get(getAllTours).post(createTour);
tourRouter.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

userRouter.route('/').get(getAllUsers).post(createUsers);
userRouter.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

// 4) STARTING THE SERVER

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
