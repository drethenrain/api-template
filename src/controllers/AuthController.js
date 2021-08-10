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

    res
      .cookie('access_token', token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 20, // 20m
      })
      .status(200)
      .json({ message: 'Successfully logged' });
  }

  verifyJwt(req, res, next) {
    const { access_token: token } = req.cookies;

    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    JWT.verify(token, JWT_SECRET, async err => {
      if (err) {
        return res.status(401).send({ error: 'Token provided is invalid' });
      }

      next();
    });
  }

  logout(req, res) {
    const { access_token: token } = req.cookies;

    if (!token) {
      return res.status(403).json({ message: 'Not logged' });
    }

    res
      .clearCookie('access_token')
      .status(200)
      .json({ message: 'Successfully logout' });
  }
}

module.exports = new AuthController();
