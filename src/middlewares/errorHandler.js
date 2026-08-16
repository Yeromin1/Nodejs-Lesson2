import createHttpError from 'http-errors';

// export const errorHandler = (err, req, res, next) => {
//   if (err instanceof createHttpError) {
//     res.status(err.status).json({
//       status: err.status,
//       message: err.name,
//       data: err,
//     });
//     return;
//   }

//   res.status(500).json({
//     status: 500,
//     message: 'Something went wrong',
//     data: err.message,
//   });
// };

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
