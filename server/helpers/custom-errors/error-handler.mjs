import { CustomError } from './custom-errors.mjs';

const errorHandler = (err, req, reply) => {
  if (err instanceof CustomError) {
    reply.status(err.statusCode).send({ [err.name]: err.message });
  } else {
    reply.send(err);
  }
};

export { errorHandler };
