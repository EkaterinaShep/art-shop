import { db } from '../../../db/db.mjs';
import DataTypes from 'sequelize';

const User = db.define(
  'User',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isActivated: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    activationLink: {
      type: DataTypes.UUID,
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: 'USER',
    },
  },
  {
    indexes: [
      {
        uniq: true,
        fields: ['id', 'email'],
      },
    ],
  }
);

export { User };
