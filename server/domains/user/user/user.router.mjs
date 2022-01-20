import { checkAuth } from './helpers/functions/check-auth.mjs';
import * as userController from './user.controller.mjs';
import { userSchema } from './user.schema.mjs';

const userRouter = (server, opts, done) => {
  server.get('/user', { preHandler: checkAuth }, userController.getAll);

  server.post(
    '/user/sign-up',
    { schema: { body: userSchema.body, response: userSchema.response } },
    userController.signUp
  );

  server.post('/user/sign-in', userController.signIn);

  server.post('/user/sign-out', userController.signOut);

  server.get(
    '/user/activate/:link',
    { schema: { params: userSchema.params } },
    userController.activate
  );

  server.get('/user/refresh', userController.refresh);

  done();
};

export { userRouter };
