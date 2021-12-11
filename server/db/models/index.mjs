import { User } from './user.model.mjs';
import { Basket } from './basket.model.mjs';
import { BasketArtItem } from './basket-art-item.model.mjs';
import { ArtItem } from './art-item.model.mjs';


User.hasOne(Basket)
Basket.belongsTo(User);

Basket.hasMany(BasketArtItem);
BasketArtItem.belongsTo(Basket);

ArtItem.hasMany(BasketArtItem);
BasketArtItem.belongsTo(ArtItem);

export { User, Basket, BasketArtItem, ArtItem };
