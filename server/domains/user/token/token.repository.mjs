import { Token } from './token.model.mjs';

async function addToken(token) {
  await Token.create(token);
}

async function hasToken(UserId) {
  const token = await findOneToken({ UserId });

  return !!token;
}

async function updateToken(UserId, newRefreshToken) {
  await Token.update({ refreshToken: newRefreshToken }, { where: { UserId } });
}

async function findOneToken(field) {
  const token = await Token.findOne({ where: field });

  return token;
}

async function deleteToken(refreshToken) {
  const token = await findOneToken({ refreshToken });

  await token.destroy();
}
export { addToken, hasToken, updateToken, deleteToken, findOneToken };
