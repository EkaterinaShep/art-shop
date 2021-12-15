import bcrypt from 'bcrypt';
import { randomUUID } from 'crypto';

const SALT_ROUNDS = 3;

async function createUserForDb(reqBody) {
  const hashPassword = await bcrypt.hash(reqBody.password, SALT_ROUNDS);
  const activationLink = randomUUID();

  const userForDb = { ...reqBody, password: hashPassword, activationLink };

  return userForDb;
}

export { createUserForDb };
