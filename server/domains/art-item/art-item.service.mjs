import * as artItemRepo from './art-item.repository.mjs';

async function getAll({limit, offset}) {
  return await artItemRepo.getAll({limit, offset});
}

async function addArtItem(reqBody) {
  const artItem = await artItemRepo.addArtItem(reqBody);

  return JSON.parse(JSON.stringify(artItem));
}

export { addArtItem, getAll };
