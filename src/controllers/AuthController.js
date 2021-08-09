const JWT = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../models/User');
const { JWT_SECRET } = require('../constants');

class AuthController {
  async loginUser(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ error: 'User not found' });

    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ error: 'Invalid password' });
    }

    const token = JWT.sign({ id: user.id }, JWT_SECRET, {
      expiresIn: '20m',
    });

    res.send({ user, token });
  }
}

module.exports = new AuthController();
