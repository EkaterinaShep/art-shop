import { UnauthorizedError } from '../../../../../helpers/custom-errors/custom-errors.mjs';
import { validateAccessToken } from '../../../token/token.service.mjs';

async function checkAuth(req, reply, done) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    throw new UnauthorizedError('the authorization header is missing');
  }

  const accessToken = authHeader.split(' ')[1];
  if (!accessToken) {
    throw new UnauthorizedError('the access token is missing');
  }

  const userFromToken = validateAccessToken(accessToken);
  if (!userFromToken) {
    throw new UnauthorizedError('the user is not authorized');
  }

  done();
}

export { checkAuth };
