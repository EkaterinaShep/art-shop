import { db } from '../../db/db.mjs';
import DataTypes from 'sequelize';

const BasketArtItem = db.define('BasketArtItem', {
  id: {
    type: DataTypes.UUID,
    uniq: true,
    primaryKey: true,
  },
});


export { BasketArtItem };
