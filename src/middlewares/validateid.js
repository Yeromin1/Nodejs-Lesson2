import createHttpError from 'http-errors';
import { isValidObjectId } from 'mongoose';

function validateId(req, res, next) {
  const { contactId } = req.params;

  if (!isValidObjectId(contactId)) {
    next(createHttpError(400, 'Not a valid id'));
    return;
  }

  next();
}
export default validateId;
