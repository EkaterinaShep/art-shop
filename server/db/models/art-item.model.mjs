import { db } from '../db.mjs';
import DataTypes from 'sequelize';

const ArtItem = db.define('ArtItem', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    uniq: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    uniq: true,
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
});

export { ArtItem };
