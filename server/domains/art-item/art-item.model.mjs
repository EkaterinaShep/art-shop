import { db } from '../../db/db.mjs';
import DataTypes from 'sequelize';

const ArtItem = db.define(
  'ArtItem',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      uniq: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    img: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    indexes: [
      {
        unique: true,
        fields: ['name'], // Whatever other field you need to make unique
      },
    ],
  }
);

export { ArtItem };
