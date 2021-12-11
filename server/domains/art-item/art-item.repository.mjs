import { ArtItem } from '../../db/models/art-item.model.mjs';

async function getAll({ limit, offset }) {
  return await ArtItem.findAndCountAll({ limit, offset });
}

async function addArtItem(artItem) {
  return await ArtItem.create(artItem);
}

export { addArtItem, getAll };
