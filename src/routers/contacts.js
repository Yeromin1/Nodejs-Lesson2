import { Router } from 'express';
import {
  createContactController,
  deleteContactController,
  getContactControllerById,
  getContactsController,
  patchContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import validateId from '../middlewares/validateId.js';

const router = Router();

router.get('/contacts', ctrlWrapper(getContactsController));

router.get(
  '/contacts/:contactId',
  validateId,
  ctrlWrapper(getContactControllerById),
);

router.post('/contacts', ctrlWrapper(createContactController));

router.patch(
  '/contacts/:contactId',
  validateId,
  ctrlWrapper(patchContactController),
);

router.delete(
  '/contacts/:contactId',
  validateId,
  ctrlWrapper(deleteContactController),
);

export default router;
