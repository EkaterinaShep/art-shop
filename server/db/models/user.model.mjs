import { db } from '../db.mjs';
import DataTypes from 'sequelize';

const User = db.define('User', {
  id: {
    type: DataTypes.UUID,
    uniq: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    uniq: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: 'User',
  },
});

export { User };
