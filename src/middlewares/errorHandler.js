import createHttpError from 'http-errors';

export const errorHandler = (err, req, res, next) => {
  const error = createHttpError(500, err.message);

  res.status(error.status).json({
    status: error.status,
    message: 'Something went wrong',
    data: error.message,
  });
};
