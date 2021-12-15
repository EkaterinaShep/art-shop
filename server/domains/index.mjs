import { artItemRouter } from './art-item/art-item.router.mjs';
import { userRouter } from './user/user/user.router.mjs';
import { User } from './user/user/user.model.mjs';
import { Basket } from './basket/basket.model.mjs';
import { BasketArtItem } from './basket-art-item/basket-art-item.model.mjs';
import { ArtItem } from './art-item/art-item.model.mjs';
import { Token } from './user/token/token.model.mjs';

/* --------------------------------- Models --------------------------------- */
User.hasOne(Token);
Token.belongsTo(User);

User.hasOne(Basket);
Basket.belongsTo(User);

Basket.hasMany(BasketArtItem);
BasketArtItem.belongsTo(Basket);

ArtItem.hasMany(BasketArtItem);
BasketArtItem.belongsTo(ArtItem);

/* --------------------------------- Routers -------------------------------- */
const routers = [artItemRouter, userRouter];

export { User, Token, Basket, BasketArtItem, ArtItem, routers };
