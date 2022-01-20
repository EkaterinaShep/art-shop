import bcrypt from 'bcrypt';

async function areEqualPasswords(passwordFromReq, hashedPassword) {
  const result = await bcrypt.compare(passwordFromReq, hashedPassword);

  return result;
}

export { areEqualPasswords };
