import { Request, Response } from 'express';

class Test {
  handle(_req: Request, res: Response) {
    return res.json({
      message: 'Ok',
    });
  }
}

export default new Test();
