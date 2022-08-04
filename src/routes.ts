import { Router } from 'express';

import Test from '@controllers/TestController';

const routes = Router();

routes.get('/', (_req, res) => {
  return res.json({ message: '🚀' });
});
routes.get('/test', Test.handle);

export default routes;
