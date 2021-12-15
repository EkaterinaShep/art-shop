import { db } from '../../../db/db.mjs';
import DataTypes from 'sequelize';

const Token = db.define(
  'Token',
  {
    refreshToken: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    indexes: [
      {
        uniq: true,
        fields: ['refreshToken'],
      },
    ],
  }
);

export { Token };
