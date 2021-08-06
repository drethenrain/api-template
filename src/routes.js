const router = require('express').Router();
const { UserController } = require('./controllers');

// User
router
  .post('/', UserController.create)
  .get('/', UserController.getAll)
  .get('/:id', UserController.getById)
  .put('/:id', UserController.update)
  .delete('/:id', UserController.remove);

module.exports = router;
