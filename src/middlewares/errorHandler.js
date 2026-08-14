import createHttpError from 'http-errors';

export const errorHandler = (err, req, res, next) => {
  const error = createHttpError(err.status || 500, err.message);

  res.status(error.status).json({
    status: error.status,
    message:
      error.status === 404 ? 'Contact not found' : 'Something went wrong',
    data:
      error.status === 404
        ? error.message
        : 'The contact ID has an invalid format',
  });
};
