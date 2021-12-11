import * as artItemService from './art-item.service.mjs';
import { codes } from '../../constants/constants.mjs';
import { getBody } from '../../helpers/req-reply/get-body.mjs';

async function getAll(req, reply) {
  const { limit, page } = req.query;
  const offset = limit * page - limit;

  const artItems = await artItemService.getAll({limit, offset});

  reply.send(artItems);
}

async function addArtItem(req, reply) {
  const reqBody = getBody(req);
  reqBody.img = req.filename;

  const artItem = await artItemService.addArtItem(reqBody);

  reply.code(codes.CREATED).send([artItem]);
}

export { addArtItem, getAll };
