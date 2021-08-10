const isEmail = require('validator/lib/isEmail');
const User = require('../models/User');

class UserController {
  async create(req, res) {
    const { email } = req.body;
    const user = new User(req.body);

    if (!isEmail(email)) {
      return res.status(400).json({ message: 'Email is not valid' });
    }

    if (await User.findOne({ email })) {
      return res.status(400).json({ error: 'User already exists' });
    }

    await user
      .save()
      .then(savedUser => res.status(201).json(savedUser))
      .catch(err => res.status(500).json(err.message));
  }

  async getAll(req, res) {
    await User.find()
      .then(users => res.status(200).send(users))
      .catch(err => res.status(400).json({ error: err.message }));
  }

  async getById(req, res) {
    const { id } = req.params;

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (user) {
      return res.status(200).json(user);
    }
  }

  async update(req, res) {
    const { id } = req.params;

    if (!(await User.findById(id))) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (
      User.findByIdAndUpdate(id, req.body, { new: true }, err => {
        if (err) return console.log(err);
      })
    ) {
      return res.status(200).json({ message: 'Updated' });
    }
  }

  async remove(req, res) {
    const { id } = req.params;

    if (!(await User.findById(id))) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (await User.findByIdAndDelete(id)) {
      return res.status(200).json({ message: 'Deleted' });
    }
  }
}

module.exports = new UserController();
