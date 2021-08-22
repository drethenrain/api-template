import { Request, Response, Router } from 'express';
import { UserController } from './controllers';

const route = Router();

route.get('/', (req: Request, res: Response) => {
  return res.status(200).json({ message: 'Hello World' });
});

// User
route
  .post('/users', UserController.create)
  .get('/users', UserController.getAll)
  .get('/users/:id', UserController.getById)
  .put('/users/:id', UserController.update)
  .delete('/users/:id', UserController.remove);

export default route;
