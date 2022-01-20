import { User } from './user.model.mjs';

async function getAll(attributes) {
  const users = await User.findAll({ attributes });

  return users;
}

async function hasUser(field) {
  const user = await findOneUser(field);

  return !!user;
}

async function addUser(userToDb) {
  const user = await User.create(userToDb);

  return user;
}

async function findOneUser(field) {
  const user = await User.findOne({ where: field });

  return user;
}

async function updateUser({ userUniqField, fieldsForUpdating }) {
  const user = await findOneUser(userUniqField);

  user.set(fieldsForUpdating);

  await user.save();

  return JSON.parse(JSON.stringify(user));
}

export { hasUser, addUser, findOneUser, updateUser, getAll };
