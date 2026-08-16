import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import contactsRouter from './routers/contacts.js';

dotenv.config();

export function setupServer() {
  const app = express();

  const PORT = process.env.PORT || 3000;

  app.use(cors());
  app.use(express.json());

  app.use(contactsRouter);

  app.use(notFoundHandler);
  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
