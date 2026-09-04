import createHttpError from 'http-errors';

export const errorHandler = (err, req, res, next) => {
  const error = createHttpError(
    err.status || 500,
    err.message || 'Something went wrong',
  );

  res.status(error.status).json({
    status: error.status,
    message: error.name,
    data: error.message,
  });
};
