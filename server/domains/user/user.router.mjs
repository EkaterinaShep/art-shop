import * as userController from './user.controller.mjs';

const userRouter = (server, opts, done) => {
  server.get('/users', userController.getAll);

  server.post('/user/sign-up', userController.signUp);

  server.post('/user/sign-in', userController.signIn);

  server.post('/user/sign-out', userController.signOut);

  server.get('/user/activate/:link', userController.activate);

  server.get('/user/refresh', userController.refresh);

  done();
};

export { userRouter };
