import jwt from 'jsonwebtoken';
import { JWT_ACCESS_KEY, JWT_REFRESH_KEY } from '../../../config/config.mjs';
import { NotFoundError } from '../../../helpers/custom-errors/custom-errors.mjs';
import * as tokenRepo from './token.repository.mjs';

function generateAccessToken(payload) {
  return jwt.sign(payload, JWT_ACCESS_KEY, { expiresIn: '20m' });
}

function generateRefreshToken(payload) {
  const refreshToken = jwt.sign(payload, JWT_REFRESH_KEY, { expiresIn: '30d' });

  return refreshToken;
}

async function addToken(UserId, refreshToken) {
  if (await tokenRepo.hasToken(UserId)) {
    await tokenRepo.updateToken(UserId, refreshToken);
    return;
  }

  const tokenToDb = { UserId, refreshToken };

  const token = await tokenRepo.addToken(tokenToDb);

  return token;
}

async function deleteToken(refreshToken) {
  const token = await tokenRepo.findOneToken({ refreshToken });

  if (!token) {
    throw new NotFoundError('the token was not found');
  }

  await tokenRepo.deleteToken(refreshToken);
}

function validateRefreshToken(refreshToken) {
  try {
    return jwt.verify(refreshToken, JWT_REFRESH_KEY);
  } catch (err) {
    return null;
  }
}

function validateAccessToken(accessToken) {
  try {
    return jwt.verify(accessToken, JWT_ACCESS_KEY);
  } catch (err) {
    return null;
  }
}

async function hasToken(refreshToken) {
  const result = await tokenRepo.hasToken({ refreshToken });

  return result;
}

export {
  generateAccessToken,
  generateRefreshToken,
  addToken,
  deleteToken,
  validateRefreshToken,
  hasToken,
  validateAccessToken,
};
