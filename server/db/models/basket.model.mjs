import { db } from '../db.mjs';
import DataTypes from 'sequelize';

const Basket = db.define('Basket', {
  id: {
    type: DataTypes.UUID,
    uniq: true,
    primaryKey: true,
  },
});

export { Basket };
