const router = require('express').Router();
const { UserController, AuthController } = require('./controllers');

// User
router
  .post('/', UserController.create)
  .get('/', UserController.getAll)
  .get('/:id', UserController.getById)
  .put('/:id', AuthController.verifyJwt, UserController.update)
  .delete('/:id', AuthController.verifyJwt, UserController.remove);

// Auth
router
  .post('/auth/login', AuthController.loginUser)
  .get('/auth/logout', AuthController.logout);

module.exports = router;
