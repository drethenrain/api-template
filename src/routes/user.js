/* eslint-disable consistent-return */
/* eslint-disable arrow-parens */
const router = require('express').Router();
const User = require('../database/models/User');

router
  .get('/', async (req, res) => {
    await User.find()
      .then(users => res.status(200).send(users))
      .catch(err => res.status(400).json({ error: err.message }));
  })
  .get('/:id', async (req, res) => {
    const { id } = req.params;

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'user not found' });
    }

    if (user) {
      res.status(200).json(user);
    }
  })
  .post('/', async (req, res) => {
    const user = new User(req.body);

    if (await User.findOne({ email: req.body.email })) {
      return res.status(400).json({ error: 'user already exists' });
    }

    await user
      .save()
      .then(savedUser => res.status(201).json(savedUser))
      .catch(err => res.status(500).json(err.message));
  })
  .delete('/:id', async (req, res) => {
    const { id } = req.params;

    if (!(await User.findById(id))) {
      return res.status(404).json({ message: 'user not found' });
    }

    if (await User.findByIdAndDelete(id)) {
      res.status(200).json({ message: 'deleted' });
    }
  })
  .put('/:id', async (req, res) => {
    const { id } = req.params;

    if (!(await User.findById(id))) {
      return res.status(404).json({ message: 'user not found' });
    }

    if (User.findByIdAndUpdate(id, req.body)) {
      res.status(200).json({ message: 'user updated' });
    }
  });

module.exports = router;
