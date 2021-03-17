import { Router, Response } from 'express';

const router = Router();

/* GET home page. */
router.get('/', (_, res: Response) => {
  res.render('index', { title: 'Express' });
});

export default router;
