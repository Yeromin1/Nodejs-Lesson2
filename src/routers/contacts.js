import { Router } from 'express';
import {
  getContactControllerById,
  getContactsController,
} from '../controllers/contacts.js';

const router = Router();

router.get('/contacts', getContactsController);

router.get('/contacts/:contactId', getContactControllerById);

export default router;
