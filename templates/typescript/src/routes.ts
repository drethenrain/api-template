import { Request, Response, Router } from 'express';

const route = Router();

route.get('/', (req: Request, res: Response) => {
  return res.status(200).json({ message: 'Hello World' });
});

route.get('/users', (req: Request, res: Response) => {
  const users = [
    {
      username: 'user1',
      email: '123@123',
      password: '123',
    },
    {
      username: 'user2',
      email: '123@123',
      password: '123',
    },
    {
      username: 'user3',
      email: '123@123',
      password: '123',
    },
  ];

  return res.status(200).json(users);
});

export default route;
