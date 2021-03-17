import express, { Application, Request, Response, NextFunction } from 'express';
import { join } from 'path';

const app: Application = express();

app.use((req: Request, _: Response, next: NextFunction) => {
  console.log(req.url);
  next();
});

app.get('*', (_: Request, res: Response) => {
  res.sendFile(join(__dirname, '../index.html'));
});

app.listen(5000);
