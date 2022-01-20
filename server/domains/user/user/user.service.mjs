import * as userRepo from './user.repository.mjs';
import * as tokenService from '../token/token.service.mjs';
import {
  DuplicateEmailError,
  InvalidActivationLinkError,
  NotFoundError,
  UnauthorizedError,
} from '../../../helpers/custom-errors/custom-errors.mjs';
import { createUserDto, createUserForDb } from './helpers/index.mjs';
import { sendActivationLink } from '../email/email.service.mjs';
import { API_URL } from '../../../config/config.mjs';
import { areEqualPasswords } from './helpers/functions/are-equal-passwords.mjs';

async function getAll() {
  return userRepo.getAll({
    exclude: ['password', 'createdAt', 'updatedAt', 'activationLink'],
  });
}

async function signUp(reqBody) {
  if (await userRepo.hasUser({ email: reqBody.email })) {
    throw new DuplicateEmailError(
      `the email address ${reqBody.email} is already being used`
    );
  }

  const userForDb = await createUserForDb(reqBody);
  const user = await userRepo.addUser(userForDb);

  await sendActivationLink(
    user.email,
    `${API_URL}/user/activate/${user.activationLink}`
  );

  const userDto = createUserDto(user);

  const accessToken = tokenService.generateAccessToken(userDto);
  const refreshToken = tokenService.generateRefreshToken(userDto);

  await tokenService.addToken(user.id, refreshToken);

  return { ...userDto, refreshToken, accessToken };
}

async function activateAccount(link) {
  if (!(await userRepo.hasUser({ activationLink: link }))) {
    throw new InvalidActivationLinkError(`the link ${link} is invalid`);
  }

  await userRepo.updateUser({
    userUniqField: { activationLink: link },
    fieldsForUpdating: { isActivated: true },
  });
}

async function signIn(email, password) {
  const user = await userRepo.findOneUser({ email });

  if (!user) {
    throw new NotFoundError(`the user with the email ${email} was not found`);
  }

  if (!(await areEqualPasswords(password, user.password))) {
    throw new UnauthorizedError(`the password is incorrect`);
  }

  const userDto = createUserDto(user);

  const accessToken = tokenService.generateAccessToken(userDto);
  const refreshToken = tokenService.generateRefreshToken(userDto);

  await tokenService.addToken(user.id, refreshToken);

  return { ...userDto, refreshToken, accessToken };
}

async function signOut(refreshToken) {
  await tokenService.deleteToken(refreshToken);
}

async function refresh(refreshTokenFromReq) {
  if (!refreshTokenFromReq) {
    throw new UnauthorizedError('authorization token was not found');
  }

  const userFromToken = tokenService.validateRefreshToken(refreshTokenFromReq);

  if (!userFromToken || !userService.hasToken(refreshTokenFromReq)) {
    throw new UnauthorizedError('the user is not authorized');
  }

  const user = userRepo.findOneUser({ id: userFromToken.id });

  const userDto = createUserDto(user);

  const accessToken = tokenService.generateAccessToken(userDto);
  const refreshToken = tokenService.generateRefreshToken(userDto);

  await tokenService.addToken(user.id, refreshToken);

  return { ...userDto, refreshToken, accessToken };
}

export { signUp, activateAccount, signIn, signOut, refresh, getAll };
