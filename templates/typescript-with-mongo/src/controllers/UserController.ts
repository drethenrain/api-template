import { Request, Response } from 'express';

import User from '../models/User';

class UserController {
  async create(req: Request, res: Response) {
    const { email } = req.body;
    const user = new User(req.body);

    if (await User.findOne({ email })) {
      return res.status(400).json({ error: 'User already exists' });
    }

    await user
      .save()
      .then(savedUser => res.status(201).json(savedUser))
      .catch(err => res.status(500).json(err));
  }

  async getAll(req: Request, res: Response) {
    await User.find()
      .then(users => res.status(200).send(users))
      .catch(err => res.status(400).json({ error: err.message }));
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (user) {
      return res.status(200).json(user);
    }
  }

  async update(req: Request, res: Response) {
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

  async remove(req: Request, res: Response) {
    const { id } = req.params;

    if (!(await User.findById(id))) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (await User.findByIdAndDelete(id)) {
      return res.status(200).json({ message: 'Deleted' });
    }
  }
}

export default new UserController();
