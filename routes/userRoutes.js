const express = require('express');

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
const router = express.Router();

router.route('/').get(getAllUsers).post(createUsers);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
