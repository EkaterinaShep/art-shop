import { User } from '../../db/models/user.model.mjs';

async function isThereUser(userEmail) {
  return await !!User.findOne({ where: { email: userEmail } });
}

export {isThereUser}
