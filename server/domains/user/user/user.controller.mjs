import { CLIENT_URL } from '../../../config/config.mjs';
import { codes } from '../../../constants/constants.mjs';
import * as userService from './user.service.mjs';

const MAX_AGE = 30 * 24 * 60 * 60;

async function getAll(req, reply) {
  const users = await userService.getAll();

  reply.send(users);
}

async function signUp(req, reply) {
  const reqBody = req.body;

  const user = await userService.signUp(reqBody);

  reply.setCookie('refreshToken', user.refreshToken, {
    maxAge: MAX_AGE,
    path: '/',
    httpOnly: true,
  });

  reply.code(codes.CREATED).send(user);
}

async function activate(req, reply) {
  const { link } = req.params;

  await userService.activateAccount(link);

  reply.code(codes.SEE_OTHER).redirect(CLIENT_URL);
}

async function signIn(req, reply) {
  const { email, password } = req.body;

  const user = await userService.signIn(email, password);

  reply.setCookie('refreshToken', user.refreshToken, {
    maxAge: MAX_AGE,
    path: '/',
    httpOnly: true,
  });

  reply.send(user);
}

async function signOut(req, reply) {
  const { refreshToken } = req.cookies;

  await userService.signOut(refreshToken);

  reply.clearCookie('refreshToken', { path: '/' });

  reply.send();
}

async function refresh(req, reply) {
  const { refreshToken } = req.cookies;

  const user = await userService.refresh(refreshToken);

  reply.setCookie('refreshToken', user.refreshToken, {
    maxAge: MAX_AGE,
    path: '/',
    httpOnly: true,
  });

  reply.send(user);
}

export { getAll, signUp, signIn, signOut, activate, refresh };
